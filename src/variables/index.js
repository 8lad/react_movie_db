export const mainApiKey = "a9096838b82c3238417da01b26dc07aa";
export const imagePath = "https://image.tmdb.org/t/p/w500";
export const mainUrl = "https://api.themoviedb.org/3/";
export const redirectProfile = "http://localhost:3000/userpage";
export const sessionRequest = `${mainUrl}authentication/session/new?api_key=${mainApiKey}`;
export const tokenRequest = `${mainUrl}authentication/token/new?api_key=${mainApiKey}`;
export const languageList = `${mainUrl}configuration/languages?api_key=${mainApiKey}`;
export const genreList = `${mainUrl}genre/movie/list?api_key=${mainApiKey}&language=en-US
`;
export const noImage =
  "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
export const censor = [27, 9648, 14, 10749, 80];
export const userBg =
  "https://static1.colliderimages.com/wordpress/wp-content/uploads/2020/11/Chicken-Little-slice.jpg?q=50&fit=contain&w=750&h=375&dpr=1.5";
