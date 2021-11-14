import { mainUrl } from "../variables";
import { mainApiKey } from "../variables";

export function filterUrl(genres = 10751, language = "en-US") {
  return `${mainUrl}movie/top_rated?api_key=${mainApiKey}&language=${language}&page=1&with_genres=${genres}`;
}
