// components/GenreDropdown.tsx

type Genre = {
    id: number;
    name: string;
  };
  
  type Genres = {
    genres: Genre[];
  };
  
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import { ChevronDown } from "lucide-react";
  import Link from "next/link"; // 👈 make sure it's Next.js Link, not Lucide's Link
  
  async function GenreDropdown() {
    const url = "https://api.tmdb.org/3/genre/movie/list?language=en";
  
    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    };
  
    const response = await fetch(url, options);
    const data = (await response.json()) as Genres;
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white flex justify-center items-center">
          Genre
          <ChevronDown className="ml-1" />
        </DropdownMenuTrigger>
  
        <DropdownMenuContent>
          <DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
          <DropdownMenuSeparator />
  
          {data.genres.map((genre) => (
            <DropdownMenuItem key={genre.id}>
              <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                {genre.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
  
  export default GenreDropdown;
  