import { ShoppingCartInterface } from "types/preload/request";

export interface ShoppingCartResponseInterface extends ShoppingCartInterface {
  cc_total: string;
}