import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import { Metadata } from "next";

interface GenrePageProps {
  params: { id: string };
  searchParams?: { genre?: string };
}

export async function generateMetadata({
  searchParams,
}: GenrePageProps): Promise<Metadata> {
  return {
    title: `Results for ${searchParams?.genre || "Genre"} | Disney+ Clone`,
  };
}

export default async function GenrePage({ params, searchParams }: GenrePageProps) {
  const movies = await getDiscoverMovies(params.id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">
          Results for {searchParams?.genre}
        </h1>
      </div>
      <MoviesCarousel title="Genre" movies={movies} isVertical />
    </div>
  );
}
