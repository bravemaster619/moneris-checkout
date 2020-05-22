import { ShoppingCartInterface } from "../../preload/request";

export interface ShoppingCartResponseInterface extends ShoppingCartInterface {
  cc_total: string;
}