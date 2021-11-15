import { mainUrl } from "../variables";

export function approveUserToken(token, redirect) {
  return `${mainUrl}authenticate/${token}?redirect_to=${redirect}`;
}
