// app/genre/[id]/page.tsx

import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre?: string;
  };
};

export default async function GenrePage({ params, searchParams }: Props) {
  const movies = await getDiscoverMovies(params.id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">
          Results for {searchParams.genre}
        </h1>
      </div>
      <MoviesCarousel title={"Genre"} movies={movies} isVertical />
    </div>
  );
}
