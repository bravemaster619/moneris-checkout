import { BooleanType } from "../../global";
import { 
  ContactDetailsInterface,
  ShippingDetailsInterface,
  RecurringBillingInterface,
} from "../../preload/request";
import { CreditCardInterface, CreditCardResultInterface } from "../../receipt/response/card";
import { BillingDetailResponseInterface } from "../../receipt/response/billing";
import { ShoppingCartResponseInterface } from "../../receipt/response/cart";
import { WalletInterface } from "../../receipt/response/wallet";
import { EcommerceIndicatorType } from "../../receipt/response/eci";
import { ReceiptResultType } from "../../receipt/response/result";
import { GiftInterface } from "../../receipt/response/gift";
import { TokenizationInterface } from "../../receipt/response/tokenize";

export * from "../../receipt/response/billing";
export * from "../../receipt/response/card";
export * from "../../receipt/response/cart";
export * from "../../receipt/response/eci";
export * from "../../receipt/response/gift";
export * from "../../receipt/response/result";
export * from "../../receipt/response/wallet";

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