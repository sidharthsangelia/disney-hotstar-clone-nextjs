"use client";

import { Movie } from "@/typings";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";

type Props = {
  movies: Movie[];
};

Autoplay.globalOptions = { delay: 8000 };

function CarouselBanner({ movies }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div
      ref={emblaRef}
      className="overflow-hidden relative cursor-pointer  "
    >
      <div className="flex">
        {movies.map((movie) => (
          <div key={movie.id} className="flex-[0_0_100%] relative min-w-0">
            <Image
              src={getImagePath(movie.backdrop_path, true)}
              alt={movie.title}
              width={1920}
              height={1080}

            />

            {/* Text Overlay */}
            <div
              className="hidden md:inline absolute mt-0 top-0 left-0 h-full w-full 
              bg-gradient-to-r from-gray-900/90 via-transparent to-transparent 
              text-white p-10 space-y-5 z-20 pt-40 xl:pt-52"
            >
              <h2 className="text-5xl font-bold max-w-xl">
                {movie.title}
              </h2>
              <p className="max-w-xl line-clamp-3">{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1a1c29]" />
    </div>
  );
}

export default CarouselBanner;
