import { BooleanType } from "../../global";

export default interface PreloadResponseInterface {
  response: {
    success: BooleanType;
    ticket?: string;
    error?: {
      data: any;
    }
  }
}