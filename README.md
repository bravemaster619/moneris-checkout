# Overview

Npm module for Moneris Checkout.

For developer document, please see [official doc](https://developer.moneris.com/en/Documentation/NA/E-Commerce%20Solutions/MCO/About%20Moneris%20Checkout) 

# How to Use

```javascript
import MonerisCheckout from "moneris-checkout";
import { EnvironmentType } from "moneris-checkout/types/global";

const moneris = new MonerisCheckout(
    "moneris", // Store ID
    "hurgle", // API token
    "chkt5BF66neris", // Checkout ID
    EnvironmentType.TEST // "qa" for test, "prod" for production
);


// Send a preload request
const preload = await moneris.preload(6.19);
// Receive ticket ID
const ticket = preload.response.ticket;
// After the client completes payment, send a receipt request with ticket
const receipt = await moneris.receipt(ticket);

```