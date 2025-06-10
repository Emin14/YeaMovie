export const getMovieMetadata = (movie) => {
  if (!movie) {
    return;
  }

  const movieCopy = { ...movie };
  const metadata = [
    { data: movieCopy.genres, ru: "Жанр" },
    { data: movieCopy.countries, ru: "Страна" },
    { data: movieCopy.year, ru: "Год" },
    {
      data: movieCopy.persons?.find((item) => item.enProfession === "director")
        ?.name,
      ru: "Режисер",
    },
    {
      data: movieCopy.persons?.filter(
        (item, index) => item.enProfession === "actor" && index < 5,
      ),
      ru: "В главных ролях",
    },
  ];

  return metadata;
};
