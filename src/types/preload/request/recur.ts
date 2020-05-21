import { BooleanType } from "types/global";

export enum RecurUnitType {
  DAY = "day",
  WEEK = "week",
  MONTH = "month",
  EOM = "eom"
}

export interface RecurringBillingInterface {
  number_of_recurs?: number;
  recur_period?: number;
  recur_amount?: number;
  recur_unit?: RecurUnitType;
  start_date?: string; // YYMMDD format
  bill_now?: BooleanType;
}