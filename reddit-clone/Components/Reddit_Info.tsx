import { CakeIcon } from "@heroicons/react/24/outline";
import EllipsisHorizontalCircleIcon from "@heroicons/react/24/outline/EllipsisHorizontalCircleIcon";

function Reddit_Info() {
  return(
    <div className="p-1 w-80 max-w-xs flex flex-col bg-reddit-Grey border-reddit_Border border-1 rounded-md">
      <div className="flex relative pt-3 pl-2 font-semibold">
        <div className="text-gray-500 text-sm">About Community</div>
        <button className="text-white text-xs pr-4"><EllipsisHorizontalCircleIcon className="h-6 w-6 mt-2 mr-3 absolute top-0 right-0"/></button>
      </div>
      <div className="relative w-fit text-sm text-white m-2 mt-6">
        <p>Danganronpa is a Japanese visual novel franchise created by Kazutaka Kodaka and published by Spike Chunsoft since 2010.</p>
      </div>
      <div className="flex flex-row items-center">
        <CakeIcon className="h-6 w-6 m-1 mr-2" />
        Feb 12th, 2024
      </div>
      <hr className="bg-reddit_Border my-4 mx-2 border-0 h-0.5" />
      <div className="flex flex-row items-center px-2 text-sm">
        <div className="m-1">
          <p>{Math.floor(Math.random() * (500 - 200) + 200)}K</p>
          <p className="text-xs text-gray-400">Killing game participants</p>
        </div>
        <div className="m-1">
          <p>{Math.floor(Math.random() * (235 - 10) + 10)}</p>
          <p className="text-xs text-gray-400">Preparing for punishment</p>
        </div>
        <div className="m-1">
          <p>{Math.floor(Math.random() * (7 - 1) + 1)}</p>
          <p className="text-xs text-gray-400">Ranked by size</p>
        </div>
      </div>
    </div>
    
  )
}

export default Reddit_Info;