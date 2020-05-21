import { BooleanType } from "types/global";

export enum FraudDecisionOriginType {
  MONERIS = "Moneris",
  MERCHANT = "Merchant"
};

export enum FraudResultType {
  SUCCESS = "1",
  FAILED = "2",
  NOT_PERFORMED = "3",
  CARD_NOT_ELIGIBLE = "4"
}

export enum FraudConditionType {
  OPTIONAL = "0",
  MANDATORY = "1"
}

export enum FraudStatusType {
  SUCCESS = "success",
  FAILED = "failed",
  DISABLED = "disabled",
  INELIGIBLE = "ineligible",
  FAILED_OPTIONAL = "failed_optional",
  FAILED_MANDATORY = "failed_mandatory"
}

export interface CvdFraudInterface {
  decision_origin: FraudDecisionOriginType;
  result: FraudResultType;
  condition: FraudConditionType;
  status: FraudStatusType;
  code: string;
  details: FraudConditionType;
}

export interface AvsFraudInterface {
  decision_origin: FraudDecisionOriginType;
  result: FraudResultType;
  condition: FraudConditionType;
  status: FraudStatusType;
  code: string;
  details: any;
}

export enum ThreeDSecureDetailsMessageType {
  AUTH_NOT_AVAILABLE = "Authentication Not Available",
  UNABLE_TO_VERIFY_ENROLLMENT = "Unable to Verify Enrollment",
  SUCCESSFUL_PAYER_AUTH = "Successful Payer Authentication",
  CARDHOLDER_NOT_PARTICIPATING = "Cardholder Not Participating",
  AUTH_FAILED = "failed 3-D Secure authentication",
  SUCCESSFUL_MERCHANT_ATTEMPT = "Successful Merchant Attempt"
}

export enum ThreeDSecureVerificationCodeType {
  NOT_ENROLLED = "N",
  NOT_PARTICIPATING = "U",
  ENROLLED = "Y"
}

export interface ThreeDSecureFraudInterface {
  decision_origin: FraudDecisionOriginType;
  result: FraudResultType;
  condition: FraudConditionType;
  status: FraudStatusType;
  code: string;
  details: {
    cavv: string;
    message: ThreeDSecureDetailsMessageType;
    VERes: ThreeDSecureVerificationCodeType;
    PARes: string;
    loadvbv?: BooleanType.TRUE;
  }
}

export interface KountFraudInterface {
  decision_origin: FraudDecisionOriginType;
  result: FraudResultType;
  condition: FraudConditionType;
  status: FraudStatusType;
  code: string;
  details: {
    responseCode: string;
    message: string;
    receiptID: string;
    result: FraudResultType;
    score: string;
    error: any;
  }
}