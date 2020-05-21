import { EcommerceIndicatorType } from "types/receipt/response/eci";
import { BooleanType } from "types/global";
import { ReceiptResultType } from "./result";

export interface CreditCardInterface {
  first6last4: string;
  expiry: string;
  cardholder: string;
}

export enum CreditCardType {
  VISA = "V",
  MASTERCARD = "M",
  AMERICAN_EXPRESS = "AX",
  DINERS_CARD = "DC",
  NOVUS_DISCOVER = "NO",
  SEARS = "SE",
  INTERAC_DEBIT = "D",
  JCB = "C1"
}

export enum CreditCardTransactionCodeType {
  PURCHASE = "00",
  PRE_AUTHORIZATION = "01"
}

export interface CreditCardResultInterface {
  order_no: string;
  cust_id: string;
  transaction_no: string;
  reference_no: string;
  transaction_code: CreditCardTransactionCodeType;
  transaction_type: string;
  transaction_date_time: string; // Format:YYYY-MM-DDHH:MM:SS
  corporateCard: string;
  amount: string;
  response_code: string;
  iso_response_code: string;
  card_type: CreditCardType;
  wallet_type: string;
  dynamic_descriptor: string;
  invoice_number: string;
  customer_code: string;
  eci: EcommerceIndicatorType;
  cvd_result_code: string;
  avs_result_code: string;
  first6last4: string;
  expiry_date: string; // MMYY format
  recur_success: BooleanType;
  issuer_id: string;
  ecr_no: string;
  batch_no: string;
  sequence_no: string;
  result: ReceiptResultType;
}