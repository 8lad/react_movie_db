import { mainUrl } from "../variables";
import { mainApiKey } from "../variables";
export function createUrl(page = 1, genres = 10751, language = "en-US") {
  return `${mainUrl}movie/top_rated?api_key=${mainApiKey}&language=${language}&page=${page}&with_genres=${genres}`;
}
