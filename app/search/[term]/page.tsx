import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { getAiSuggestions } from "@/lib/getAiSuggestions";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ term: string }>;
};

async function SearchPage({ params }: Props) {
  const { term } = await params; // Resolve the Promise
  if (!term) notFound();

  const termToUse = decodeURI(term);
  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();
  const aiSuggestions = await getAiSuggestions(termToUse);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>

        {/* AI Suggestions */}
        {aiSuggestions && (
          <p className="text-muted-foreground px-10 max-w-3xl">
            {aiSuggestions}
          </p>
        )}

        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;