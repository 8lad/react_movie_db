import { mainUrl } from "../variables";
import { mainApiKey } from "../variables";
export function searchUrl(search, page = 1) {
  return `${mainUrl}search/movie?api_key=${mainApiKey}&language=en-US&page=${page}&include_adult=false&query=${search}`;
}
