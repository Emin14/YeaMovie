import Banner from "../../components/Banner/Banner";
import SelectedMovies from "../../components/SelectedMovies/SelectedMovies";
import MoviesByCategory from "../../components/MoviesByCategory/MoviesByCategory";

export default function Home() {
  return (
    <>
      <Banner />
      <SelectedMovies />
      <MoviesByCategory />
    </>
  );
}
