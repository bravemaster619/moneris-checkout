import { EnvironmentType, RequestType, LanguageType } from "types/global";
import { RecurringBillingInterface } from "types/preload/request/recur";
import { ShoppingCartInterface } from "types/preload/request/cart";
import { ContactDetailsInterface } from "types/preload/request/contact";
import { ShippingDetailsInterface } from "types/preload/request/shipping";
import { BillingDetailsInterface } from "types/preload/request/billing";

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

