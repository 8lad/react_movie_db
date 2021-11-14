import { mainUrl } from "../variables";
import { mainApiKey } from "../variables";
export function singleMovieUrl(movieId) {
  return `${mainUrl}movie/${movieId}?api_key=${mainApiKey}&language=en-US`;
}
