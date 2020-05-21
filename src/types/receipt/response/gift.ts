export interface GiftInterface {
  balance_remaining: string;
  description: string;
  first4last4: string;
  pan: string;
  cvd: string;
  balance_used: string;
}

export interface GiftResultInterface {
  order_no: string;
  transaction_no: string;
  reference_no: string;
  response_code: string;
  benefit_amount: string;
  benefit_remaining: string;
  first6last4: string;
}