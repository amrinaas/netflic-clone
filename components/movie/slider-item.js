import Link from 'next/link';
import { FaPlay, FaThumbsUp, FaPlus, FaAngleDown } from 'react-icons/fa';

export default function SliderItem({
  poster_path,
  backdrop_path,
  title,
  width,
  id,
  isGenre,
  vote_average,
  release_date,
}) {
  const inputDate = new Date(release_date);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = inputDate.toLocaleDateString('en-US', options);

  return (
    <Link
      style={{ width: `${width}%` }}
      href={`/popular/${id}`}
      className="group mx-1 hover:scale-125 hover:shadow ease-out duration-500 hover:origin-bottom-left inline-block"
    >
      <div className="w-full !bg-cover !bg-center">
        <img
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}/${
            !isGenre ? poster_path : backdrop_path
          }`}
          alt={title}
          className="object-cover rounded-t-md"
        />
      </div>

      <div className="box-content bg-black/90 w-full py-3 ease-out duration-300 rounded-b-md opacity-0 group-hover:opacity-100">
        <div className="flex items-center justify-between">
          <span className="rounded-full border-[1px] border-gray-400 overflow-hidden text-xs p-2 text-center mx-1">
            <FaPlay />
          </span>
          <span className="rounded-full border-[1px] border-gray-400 overflow-hidden text-xs p-2 text-center mx-1">
            <FaThumbsUp />
          </span>
          <span className="rounded-full border-[1px] border-gray-400 overflow-hidden text-xs p-2 text-center mx-1">
            <FaPlus />
          </span>
          <span className="last:ml-auto mr-5 rounded-full border-[1px] border-gray-400 overflow-hidden text-xs p-2 text-center mx-1">
            <FaAngleDown />
          </span>
        </div>
        <div className="text-xs mt-2">
          <p className="font-bold">{title}</p>
          <p className="text-green-800 font-bold">
            {vote_average.toFixed(1)} / 10
          </p>
          <p className="text-gray-400 text-[10px]">{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
}
