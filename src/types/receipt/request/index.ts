import { EnvironmentType, RequestType } from "types/global";

export default interface ReceiptRequestInterface {
  store_id: string;
  api_token: string;
  checkout_id: string;
  ticket: string;
  environment: EnvironmentType;
  action: RequestType;
}