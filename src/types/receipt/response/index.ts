import { BooleanType } from "types/global";
import { 
  ContactDetailsInterface,
  ShippingDetailsInterface,
  RecurringBillingInterface,
} from "types/preload/request";
import { CreditCardInterface, CreditCardResultInterface } from "types/receipt/response/card";
import { BillingDetailResponseInterface } from "types/receipt/response/billing";
import { ShoppingCartResponseInterface } from "types/receipt/response/cart";
import { WalletInterface } from "types/receipt/response/wallet";
import { EcommerceIndicatorType } from "types/receipt/response/eci";
import { ReceiptResultType } from "types/receipt/response/result";
import { GiftInterface } from "./gift";
import { TokenizationInterface } from "./tokenize";

export * from "types/receipt/response/billing";
export * from "types/receipt/response/card";
export * from "types/receipt/response/cart";
export * from "types/receipt/response/eci";
export * from "types/receipt/response/gift";
export * from "types/receipt/response/result";
export * from "types/receipt/response/wallet";

export default interface ReceiptResponseInterface {
  response: {
    success: BooleanType;
    request?: {
      txn_total?: any;
      cust_info?: ContactDetailsInterface;
      shipping?: ShippingDetailsInterface;
      billing?: BillingDetailResponseInterface;
      recur?: RecurringBillingInterface;
      cart?: ShoppingCartResponseInterface;
      cc?: CreditCardInterface;
      gift?: Array<GiftInterface>;
      wallet?: WalletInterface;
      ticket?: string;
      cust_id?: string;
      dynamic_descriptor?: string;
      order_no?: string;
      eci: EcommerceIndicatorType;
    },
    receipt?: {
      result: ReceiptResultType,
      cc?: CreditCardResultInterface,
      tokenize?: TokenizationInterface
    }
  }
}