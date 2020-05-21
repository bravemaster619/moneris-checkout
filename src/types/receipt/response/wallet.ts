export enum WalletTokenizationDataType {
  PAYMENT_GATEWAY = "PAYMENT_GATEWAY",
  DIRECT = "DIRECT"
}

export enum WalletPaymentMethodType {
  CARD = "CARD",
  PAYPAL = "PAYPAL"
}

export interface WalletAddressInterface {
  address3: string;
  sortingCode: string;
  address2: string;
  countryCode: string;
  address1: string;
  postalCode: string;
  name: string;
  locality: string;
  administrativeArea: string;
}

export interface WalletInterface {
  type: string;
  paymentData: {
    apiVersionMinor: string;
    apiVersion: string;
    paymentMethodData: {
      description: string;
      tokenizationData: {
        type: WalletTokenizationDataType;
        token: string;
      };
      type: WalletPaymentMethodType;
      info: {
        cardNetwork: string;
        cardDetails: string;
        billingAddress: WalletAddressInterface
      },
      shippingAddress: WalletAddressInterface
    }
  }
}