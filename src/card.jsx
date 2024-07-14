// import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCirclePlay,
  faCirclePlus,
} from "@fortawesome/free-solid-svg-icons";
import coverPic from "./assets/cover-pic.jpg";

function Card() {
  return (
    <>
      <div className="wrapper w-full bg-zinc-800 flex justify-center items-center">
        <div className="box w-full max-w-[945px] bg-black rounded-md flex justify-between items-center overflow-hidden flex-col custom-max:flex-row">
          <div className="image">
            <img src={coverPic} className="max-w-[100%]" alt="picture" />
          </div>
          <div className="content w-full p-[2em]">
            <h1 className="text-white text-3xl tracking-widest font-bold">
              STRANGER THINGS
            </h1>
            <ul className="list flex justify-between items-center flex-wrap list-none text-white text-[1.1rem] my-[.3em]">
              <li className="text-yellow-400">
                <FontAwesomeIcon
                  className="mx-[.2em] custom-max:mx-1 text-[1.2rem]"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mx-[.2em] custom-max:mx-1 text-[1.2rem]"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mx-[.2em] custom-max:mx-1 text-[1.2rem]"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mx-[.2em] custom-max:mx-1 text-[1.2rem]"
                  icon={faStar}
                />
                <FontAwesomeIcon
                  className="mx-[.5em] custom-max:mx-1 text-[1.2rem]"
                  icon={faStar}
                />
              </li>
              <li>(3,568)</li>
              <li>2016</li>
              <li>2h 13m</li>
            </ul>
            <p className="text-[1.1rem] leading-6 text-white">
              In a small town where everyone knows everyone, a peculiar incident
              starts a chain of events that leads to the disappearance of a
              child - which begins to tear at the fabric of an otherwise
              peaceful community ...
            </p>
            <p className="text-white my-4">
              <span className="text-red-600 mr-3">Starring:</span>
              Winona Ryder, David Harbour, Finn Wolfhard...
            </p>
            <p className="text-white my-4">
              <span className="text-red-600 mr-3">Directed by:</span>
              The Duffer Brothers
            </p>
            <div className="buttons flex">
              <button className="play px-5 py-3 text-[1.1rem] text-white bg-red-700 rounded-md mr-4">
                Play Now
                <FontAwesomeIcon className="ml-3" icon={faCirclePlay} />
              </button>
              <button className="add px-5 py-3 text-[1.1rem] text-white bg-red-700 rounded-md">
                Add To Wishlist
                <FontAwesomeIcon className="ml-3" icon={faCirclePlus} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
