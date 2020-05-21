export enum EnvironmentType {
  TEST = "qa",
  PRODUCTION = "prod"
}

export enum LanguageType {
  EN = "en",
  FR = "fr"
}

export enum RequestType {
  PRELOAD = "preload",
  RECEIPT = "receipt"
};

export enum BooleanType {
  TRUE = "true",
  FALSE = "false"
}

export const Hosts = {
  [EnvironmentType.TEST]: "gatewayt.moneris.com",
  [EnvironmentType.PRODUCTION]: "gateway.moneris.com"
};

export const EndPoints = {
  [EnvironmentType.TEST]: "chkt/request/request.php",
  [EnvironmentType.PRODUCTION]: "chkt/request/request.php"
}
