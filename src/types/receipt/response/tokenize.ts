import { BooleanType } from "types/global";

export enum TokenizationStatusType {
  TEMPORARY_TOKEN_CREATED = "001",
  INVALID_PROFILE_ID_ON_REQUEST = "940",
  ERROR_GENERATION_TOKEN = "941",
  INVALID_PROFILE_ID_OR_SOURCE_URL = "942",
  INVALID_CARD_DATA = "943",
  INVALID_EXPIRATION_DATE = "944",
  INVALID_CVD_DATA = "945"
}

export interface TokenizationInterface {
  success: BooleanType,
  first4last4: string;
  data_key: string;
  status: TokenizationStatusType;
  message: string;
}