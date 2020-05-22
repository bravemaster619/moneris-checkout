import { expect } from "chai";
import "mocha";
import MonerisCheckout from "../moneris-checkout";
import { EnvironmentType, BooleanType } from "../types/global";
describe("MonerisCheckout", () => {

  const moneris = new MonerisCheckout(
    "moneris", "hurgle", "chkt5BF66neris", EnvironmentType.TEST
  );

  describe("preload", () => {
    it("should return response from endpoint", async function() {
      const resp = await moneris.preload(4.99);
      expect(resp).to.not.be.empty;
      expect(resp.response).to.not.be.empty;
      expect(resp.response.success).to.be.a("string", BooleanType.TRUE);
      expect(resp.response.ticket).to.not.be.empty;
    });
  });

  describe("receipt", () => {
    it("should return response from endpoint", async function () {
      const preload = await moneris.preload(4.99);
      const ticket = preload.response.ticket;
      const receipt = await moneris.receipt(ticket);
      expect(receipt).to.not.be.empty;
      expect(receipt.response).to.not.be.empty;
      expect(receipt.response.success).to.be.a("string");
    });
  });

});