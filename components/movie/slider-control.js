import { FaAnglesLeft, FaAnglesRight } from 'react-icons/fa6';

export default function SliderControl({ arrowDirection, onClick }) {
  return (
    <div
      className={`absolute top-0 h-full w-1/12 flex items-center justify-center text-3xl cursor-pointer text-white z-10 ${
        arrowDirection === 'right'
          ? 'right-0 bg-gradient-to-r from-white/0 to-black'
          : 'left-0  bg-gradient-to-l from-white/0 to-black'
      }`}
    >
      <div className="duration-500 hover:scale-100" onClick={onClick}>
        {arrowDirection === 'right' ? <FaAnglesRight /> : <FaAnglesLeft />}
      </div>
    </div>
  );
}
