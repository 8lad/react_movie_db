import FavoriteMovies from "../pages/FavoriteMovies/FavoriteMovies";
import LoginPage from "../pages/LogInPage/LogInPage";
import Page404 from "../pages/Page404/Page404";
import RatedMovies from "../pages/RatedMovies/RatedMovies";
import SignInPage from "../pages/SignInPage/SignInPage";
import SingleMovie from "../pages/SingleMovie/SingleMovie";
import UserPage from "../pages/UserPage/UserPage";

export const routes = [
  { path: "/userpage", component: UserPage, isPrivate: true },
  { path: "/moviepage", component: SingleMovie, isPrivate: true },
  { path: "/movies", component: RatedMovies, isPrivate: true },
  { path: "/favorites", component: FavoriteMovies, isPrivate: true },
  { path: "*", component: Page404 },
  { path: "/signin", component: SignInPage },
  { path: "/", component: LoginPage },
];
