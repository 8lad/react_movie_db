import { mainUrl } from "../variables";
import { mainApiKey } from "../variables";
export function getUserDetails(sessionId) {
  return ` ${mainUrl}account?api_key=${mainApiKey}&session_id=${sessionId}`;
}
