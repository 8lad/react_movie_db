import { mainUrl } from "../variables";
import { mainApiKey } from "../variables";
export function getSessionId() {
  return `${mainUrl}authentication/session/new?api_key=${mainApiKey}`;
}
