import { CakeIcon, ChevronDownIcon, EllipsisHorizontalIcon, PencilIcon } from "@heroicons/react/24/outline";
import Avatar from '../public/Images/Avatar.png';
import Image from "next/image";
import Accordion from "./Tools/Accordion";

const Reddit_Info = () => {

  
  return(
  <span className="flex flex-col">
    <div className="p-1 w-80 max-w-xs flex flex-col bg-reddit-Grey border-reddit_Border border-1 rounded-md mb-2">
      <div className="flex relative pt-2 pl-2 font-semibold">
        <div className="text-reddit-Dark_Tint text-sm">About Community</div>
        <button className="text-white text-xs mr-4 p-0 mt-0 ml-auto hover:bg-reddit-Dark_Grey"><EllipsisHorizontalIcon className="h-6 w-6 text-reddit-Dark_Tint"/></button>
      </div>
      <div className="relative w-fit text-sm text-gray-300 m-2 mt-6">
        <p>Danganronpa is a Japanese visual novel franchise created by Kazutaka Kodaka and published by Spike Chunsoft since 2010.</p>
      </div>
      <div className="flex flex-row items-center text-reddit-Dark_Tint text-sm">
        <CakeIcon className="h-6 w-6 m-1 mr-2 text-gray-100" />
        Created Feb 12th, 2024
      </div>
      <hr className="bg-reddit_Border my-4 mx-2 border-0 h-0.5" />
      {/* Stats of the Reddit */}
      <div className="flex grid-flow-row grid-cols-3 grid- items-center px-2 text-xs">
        <div title={`${Math.floor(Math.random() * (120 - 50) + 50)} people have pressed Join`} className="mx-2 flex-1">
          <p className="text-base">{Math.floor(Math.random() * (500 - 200) + 200)}K</p>
          <p className="text-xs text-reddit-Dark_Tint">Killing game participants</p>
        </div>
        <div title={`There has been ${Math.floor(Math.random() * (25 - 1) + 1)} People on this portfolio in the past 30-Days!`} className="mx-2 flex-1">
          <p className="text-base"><span  className="text-green-500">•</span>&nbsp;{Math.floor(Math.random() * (135 - 10) + 10)}</p>
          <p className="text-xs text-reddit-Dark_Tint">Preparing for punishment</p>
        </div>
        <div title={`Top 5% of Portfolio Projects out there!`} className="mx-2 flex-1 align-top">
          <p className="text-base">Top {Math.floor(Math.random() * (7 - 1) + 1)}%</p>
          <p className="text-xs text-reddit-Dark_Tint">Ranked by size</p>
        </div>
      </div>
      <hr className="bg-reddit_Border my-4 mx-2 border-0 h-0.5" />
      <button className="bg-gray-100 hover:bg-gray-300 text-gray-900 text-sm w-11/12 mx-3 px-1 h-8 rounded-full font-semibold">Create Post</button>
      <hr className="bg-reddit_Border my-4 mx-2 border-0 h-0.5" />
      <div>
        <div className="flex flex-row items-center mx-2 m-1 h-6">
          <p className="text-xs">PREVIEW</p>
          <button className="ml-auto h-8 w-8 mr-1 hover:bg-reddit-Dark_Grey rounded-full"><PencilIcon className="ml-1 mr-2 h-6 w-6"></PencilIcon></button>
        </div>
        <div className="m-2 mt-4 flex flex-row items-center">
          <Image src={Avatar} height={25} width={25} alt="User Avatar"></Image>
          <p className="pl-2 text-xs">NotTayyy</p>
        </div>
      </div>
      <hr className="bg-reddit_Border mt-4 mb-2 mx-2 border-0 h-0.5" />
        <button className="m-2 mt-1 hover:text-gray-300 hover:bg-reddit-Dark_Grey h-8 w-full ml-auto flex flex-row items-center rounded-full pl-2 text-xs">
          <p className="ml-2 text-xs">COMMUNITY OPTIONS</p>
          <ChevronDownIcon className="h-5 w-5 ml-auto mr-2"></ChevronDownIcon>
        </button>
    </div>

    <div className="p-1 w-80 max-w-xs flex flex-col bg-reddit-Grey border-reddit_Border border-1 rounded-md my-2">
      <div className="text-sm text-reddit-Dark_Tint m-2" >
        r/The-Finals Rules
      </div>
      <Accordion title='Help Me' collapsed='Fuck Off' textCol='text-White' />
      <Accordion title='Help Me' collapsed='Fuck Off' textCol='text-White' />
      <Accordion title='Help Me' collapsed='Fuck Off' textCol='text-White' />
      <Accordion title='Help Me' collapsed='Fuck Off' textCol='text-White' />
      <Accordion title='Help Me' collapsed='Fuck Off' textCol='text-White' />
      <Accordion title='Help Me' collapsed='Fuck Off' textCol='text-White' />
      <Accordion title='Help Me' collapsed='Fuck Off' textCol='text-White' />
      <Accordion title='Help Me' collapsed='Fuck Off' textCol='text-White' />   
    </div>
  </span>
  );
};

export default Reddit_Info;