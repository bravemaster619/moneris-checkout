import { EnvironmentType, RequestType, LanguageType } from "../../global";
import { RecurringBillingInterface } from "./recur";
import { ShoppingCartInterface } from "./cart";
import { ContactDetailsInterface } from "./contact";
import { ShippingDetailsInterface } from "./shipping";
import { BillingDetailsInterface } from "./billing";

export interface RequiredPreloadRequestInterface {
  store_id: string;
  api_token: string;
  checkout_id: string;
  txn_total: number;
  environment: EnvironmentType;
  action: RequestType;
}

export interface OptionalPreloadRequestInterface {
  order_no?: string;
  cust_id?: string;
  dynamic_descriptor?: string;
  language?: LanguageType;
  recur?: RecurringBillingInterface;
  cart?: ShoppingCartInterface;
  contact_details?: ContactDetailsInterface;
  shipping_details?: ShippingDetailsInterface;
  billing_details?: BillingDetailsInterface;
}

