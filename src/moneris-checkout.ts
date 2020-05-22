import https from "https";
import { EnvironmentType, RequestType, Hosts, EndPoints } from "./types/global";
import { OptionalPreloadRequestInterface } from "./types/preload/request";
import ReceiptRequestInterface from "./types/receipt/request";
import PreloadResponseInterface from "./types/preload/response";
import ReceiptResponseInterface from "./types/receipt/response";

export default class MonerisCheckout {

  private requestOption: https.RequestOptions;

  constructor(
    private storeID: string, 
    private apiToken: string, 
    private checkoutID: string, 
    private environment: EnvironmentType = EnvironmentType.TEST) {
      this.requestOption = {
        hostname: Hosts[this.environment],
        port: 443,
        path: "/" + EndPoints[this.environment],
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      };
    }

  async preload(totalPrice: number, optionalData: OptionalPreloadRequestInterface = {}): Promise<PreloadResponseInterface> {
    const payload: any = { ...optionalData };
    payload.store_id = this.storeID;
    payload.api_token = this.apiToken;
    payload.checkout_id = this.checkoutID;
    payload.environment = this.environment;
    payload.txn_total = totalPrice;
    payload.action = RequestType.PRELOAD;
    return await this.sendRequest(this.requestOption, payload);
  }

  async receipt(ticket: string): Promise<ReceiptResponseInterface> {
    const payload: ReceiptRequestInterface = {
      store_id: this.storeID,
      api_token: this.apiToken,
      checkout_id: this.checkoutID,
      environment: this.environment,
      action: RequestType.RECEIPT,
      ticket
    };
    return await this.sendRequest(this.requestOption, payload);
  }

  sendRequest(option: https.RequestOptions, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      let response = "";
      const req = https.request(option, (res) => {
        res.on("data", (d) => {
          response += d;
        });
        res.on("end", () => {
          resolve(JSON.parse(response));
        });
      });
      req.on('error', (e) => {
        reject(e);
      });
      req.write(JSON.stringify(data));
      req.end();
    });
  }

};