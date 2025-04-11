import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import { getAiSuggestions } from "@/lib/getAiSuggestions";

export default async function GenrePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams?: Promise<{ genre?: string }>;
}) {
  const { id } = await params;
  const { genre } = await searchParams || {};

  const genreName = genre || "this genre";

  const movies = await getDiscoverMovies(id);
  const aiSuggestions = await getAiSuggestions(
    `Recommend some must-watch movies in the ${genreName} genre.`
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">
          Results for {genreName}
        </h1>

        {aiSuggestions && (
          <p className="text-muted-foreground px-10 max-w-3xl">
            {aiSuggestions}
          </p>
        )}
      </div>

      <MoviesCarousel title="Genre" movies={movies} isVertical />
    </div>
  );
}
