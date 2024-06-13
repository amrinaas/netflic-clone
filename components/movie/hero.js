'use client';

import { useState, useEffect } from 'react';

import { FaPlay } from 'react-icons/fa6';
import { AiOutlineExclamationCircle } from 'react-icons/ai';

export default function Hero({ data }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const random = Math.floor(Math.random() * data.length);
    setMovie(data[random]);
  }, []);

  const truncate = (str, n) =>
    str.length > n ? str.substr(0, n - 1) + '...' : str;

  if (!movie) return null;

  return (
    <div
      className="bg-center h-[600px] mb-10 bg-cover"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.backdrop_path})`,
      }}
    >
      <div className="mx-10 py-52">
        <h1 className="text-7xl">{movie.title}</h1>
        <p className="w-2/5 my-5">{truncate(movie.overview, 200)}</p>
        <div className="flex">
          <button className="px-6 py-1 text-black font-semibold bg-gray-200 rounded-md mr-3 flex justify-center items-center hover:bg-gray-200/90">
            <FaPlay className="mr-3" />
            Play
          </button>
          <button className="px-4 py-2 bg-gray-800/70 font-semibold rounded-md mr-3 flex justify-center items-center hover:bg-gray-800/60">
            {' '}
            <AiOutlineExclamationCircle className="mr-3" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
}
