import { BooleanType } from "types/global";
import { BillingDetailsInterface } from "types/preload/request";

export interface BillingDetailResponseInterface extends BillingDetailsInterface {
  same_as_shipping: BooleanType;
}