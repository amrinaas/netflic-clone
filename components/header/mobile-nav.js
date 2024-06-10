import NavLink from './nav-link';

import { MdFace3 } from 'react-icons/md';

export default function MobileNav({ open }) {
  return (
    <div
      className={`absolute left-0 top-14 mt-5 h-screen w-1/3 bg-black transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <ul className="ml-4">
        <li className="flex items-center">
          <div className="border-2 border-white p-2 rounded mr-2">
            <MdFace3 />
          </div>
          <p>Username</p>
        </li>
        <NavLink href="/profile">
          <li>Profile</li>
        </NavLink>
        <li>Sign Out</li>
      </ul>

      <hr className="border-1 border-solid border-x-white/20 my-3" />

      <ul className="flex flex-col ml-4">
        <NavLink href="/browse">
          <li>Home</li>
        </NavLink>
        <NavLink href="/tv-shows">
          <li>TV Shows</li>
        </NavLink>
        <NavLink href="/movies">
          <li>Movies</li>
        </NavLink>
        <NavLink href="/new-popular">
          <li>New & Popular</li>
        </NavLink>
        <NavLink href="/my-list">
          <li>My List</li>
        </NavLink>
        <NavLink href="/ny-languages">
          <li>Browse by Languages</li>
        </NavLink>
      </ul>
    </div>
  );
}
