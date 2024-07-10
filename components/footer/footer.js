import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaRegCopyright,
} from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="flex text-2xl justify-center">
        <FaFacebook className="mx-3" />
        <FaInstagram className="mx-3" />
        <FaTwitter className="mx-3" />
        <FaYoutube className="mx-3" />
      </div>

      <div className="flex justify-evenly text-xs text-gray-500 my-4">
        <div className="leading-loose flex flex-col">
          <Link className="hover:underline" href="/">
            Audio Description
          </Link>
          <Link className="hover:underline" href="/">
            Investor Relations
          </Link>
          <Link className="hover:underline" href="/">
            Legal Notices
          </Link>
        </div>
        <div className="leading-loose flex flex-col">
          <Link className="hover:underline" href="/">
            Help Center
          </Link>
          <Link className="hover:underline" href="/">
            Jobs
          </Link>
          <Link className="hover:underline" href="/">
            Cookie Preferences
          </Link>
        </div>
        <div className="leading-loose flex flex-col">
          <Link className="hover:underline" href="/">
            Media Center
          </Link>
          <Link className="hover:underline" href="/">
            Terms of Use
          </Link>
          <Link className="hover:underline" href="/">
            Corporate Information
          </Link>
        </div>
        <div className="leading-loose flex flex-col">
          <Link className="hover:underline" href="/">
            Contact Developer
          </Link>
          <Link className="hover:underline" href="/">
            TMDB API
          </Link>
          <Link className="hover:underline" href="/">
            Gift Cards
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center text-xs text-gray-500 my-3 font-thin">
        <FaRegCopyright />
        <span className="ml-2">Netfliks Clone 2024</span>
      </div>
    </footer>
  );
}
