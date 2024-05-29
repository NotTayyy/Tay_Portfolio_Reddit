import { BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
var Banner = 'https://styles.redditmedia.com/t5_3lasp/styles/bannerBackgroundImage_lscg8maujyrc1.jpg?format=pjpg&s=a52506e1259435cee37bc1be1cbac0bded64cc13'
import Red_Logo from '../public/Images/Red_Logo.webp'

function Reddit_Hero() {
  return(
  <>
    <div className="h-52 bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url("${Banner}")`}}>
    </div>
    <div className="bg-reddit-Grey w-full">
      <div className="pl-4 pr-6 relative flex items-start  max-w-screen-lg mx-auto flex-col">
        <div className="flex justify-start">
          <Image src={Red_Logo} width={256} height={256} alt='Sub Reddit Logo' className="h-20 w-20 border-4 relative -top-4 border-white rounded-full"/>
          <div className="pt-2 pl-4 mr-6">
            <h1 className="text-gray-300 text-3xl font-sans font-bold"> The Finals</h1>
            <h1 className="text-reddit-Dark_Tint text-sm pt-1" >r/thefinals</h1>
          </div>
          <div >
            <button className="rounded-full my-3 py-1 px-8 text-zinc-800 bg-gray-200 hover:bg-gray-300 mr-2 font-bold" >Join</button>
          </div>
          <div>
            <Link href='#'><BellIcon className="h-8 w-8 rounded-full my-3 text-white" style={{border: '1px solid white'}} /></Link>
          </div>
        </div>
        <div className="flex mr-auto px-1 -mt-1 font-mono text-reddit-Dark_Tint">
          <button className="text-gray-300 mr-1 px-2 text-sm border-b-4 font-bold">Posts</button>
          <button className=" mx-1 px-2 text-sm hover:text-gray-200 font-bold">Wiki</button>
          <button className=" mx-1 px-2 text-sm hover:text-gray-200 font-bold">Rules</button>
          <button className=" mx-1 px-2 text-sm hover:text-gray-200 font-bold">Join our discord!</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Reddit_Hero;
