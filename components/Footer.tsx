import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10 px-4 text-center">
      <p className="text-sm">
        Built by <span className="font-semibold">Sidharth Sangelia</span>
      </p>
      <div className="flex justify-center items-center gap-6 mt-3">
        <Link
          href="https://github.com/sidharth-sangelia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </Link>

        <Link
          href="https://linkedin.com/in/sidharth-sangelia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
