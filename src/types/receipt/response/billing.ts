import { BooleanType } from "../../global";
import { BillingDetailsInterface } from "../../preload/request";

export interface BillingDetailResponseInterface extends BillingDetailsInterface {
  same_as_shipping: BooleanType;
}