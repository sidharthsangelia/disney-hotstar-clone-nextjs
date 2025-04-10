import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import Footer from "@/components/Footer";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
 <CarouselBannerWrapper />
 <div className="flex flex-col space-y-2 xl:-mt-48">

        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel movies={popularMovies} title="Popular" />
      </div>
      <Footer/>
    </main>
  );
}
