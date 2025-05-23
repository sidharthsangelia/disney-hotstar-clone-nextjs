import Image from "next/image";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between px-4 lg:px-10 py-3 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-4">
        <Image
          src="https://links.papareact.com/a943ae"
          alt="disney logo"
          width={120}
          height={100}
          className="cursor-pointer invert-0 dark:invert"
        />
      </Link>

      <div className="flex space-x-2">
        <GenreDropdown/>
        <SearchInput />
        <ThemeToggler />
      </div>
    </header>
  );
}

export default Header;
