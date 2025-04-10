import { Movie } from "@/typings";
import MovieCard from "./MovieCard";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  movies: Movie[];
  isVertical?: boolean;
};

function MoviesCarousel({ title, movies, isVertical }: Props) {
  return (
    <div className="z-50">
      <h2 className="text-xl font-bold px-10 py-2">{title}</h2>

      <div
        className={cn(
          "flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide", isVertical && "flex-col space-x-0 space-y-12"
        )}
      >
        {movies?.map((movie) =>
          isVertical ? (
            <div
              key={movie.id}
              className="flex flex-col items-center space-y-4 lg:flex-row lg:items-start lg:space-x-6 lg:space-y-0"
            >
              <MovieCard movie={movie} />
              <div className="max-w-2xl text-white">
                <p className="font-bold">
                  {movie.title} ({movie.release_date?.split("-")[0]})
                </p>
                <hr className="my-2 border-gray-500" />
                <p>{movie.overview}</p>
              </div>
            </div>
          ) : (
            <MovieCard key={movie.id} movie={movie} />
          )
        )}
      </div>
    </div>
  );
}

export default MoviesCarousel;
