import { createBrowserRouter } from "react-router";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MoviesSearch from "./pages/MoviesSearch/MoviesSearch";
import PopularMovies from "./pages/PopularMovies/PopularMovies";
import PopularTvSeries from "./pages/PopularTvSeries/PopularTvSeries";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/film/:id", element: <MovieDetails /> },
      { path: "/search", element: <MoviesSearch /> },
      { path: "/popularMovies", element: <PopularMovies /> },
      { path: "/popularTvSeries", element: <PopularTvSeries /> },
    ],
  },
]);
