import { BooleanType } from "types/global";

export default interface PreloadResponseInterface {
  response: {
    success: BooleanType;
    ticket?: string;
    error?: {
      data: any;
    }
  }
}