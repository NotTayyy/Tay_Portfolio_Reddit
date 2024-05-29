import { PhotoIcon, LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Avatar from "@/public/Images/Avatar.png";

function Create_Post() {
  return (
    <div className="px-2 py-1 w-full bg-reddit-Grey max-w-screen-sm flex rounded-md items-center mb-4 border-1 border-reddit_Border">
      <Link href='#' className='mr-4'>
        <div>
          <Image src={Avatar} alt='To Your Profile' width={256} height={256} className="h-9 w-12 scale-110 rounded-2xl"/>
        </div>
      </Link>
      <input type="text" placeholder="Create Post!" className="text-reddit-Dark_Tint hover:border-white border-1 border-reddit_Border hover:bg-reddit-Grey_tint px-2 py-0.5 my-2 w-full h-8 rounded-md bg-reddit-Dark_Grey mr-2 text-xs"/>
      <Link href='#'><PhotoIcon className="h-10 w-10 text-reddit-Dark_Tint p-2 hover:bg-reddit-Dark_Grey rounded-sm"/></Link>
      <Link href='#'><LinkIcon className="h-10 w-10 text-reddit-Dark_Tint p-2 hover:bg-reddit-Dark_Grey rounded-sm" /></Link>
    </div>
  )
}

export default Create_Post;