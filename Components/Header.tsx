import Image from "next/image";
import Logo from '../public/Images/red_icon.png';
import { ArrowLeftEndOnRectangleIcon, BellIcon, ChatBubbleOvalLeftEllipsisIcon, ChevronDownIcon, MagnifyingGlassIcon, MegaphoneIcon, PlusIcon, ShieldExclamationIcon, UserIcon, XCircleIcon, ChevronUpIcon} from '@heroicons/react/24/outline';
import Link from "next/link";
import Red_Logo from '../public/Images/Red_Logo.webp';
import BigButton from "./Tools/BigButton";
import UserHeroMenu from './Dropdowns/UserHeroMenu';
import SubDirectories from './Dropdowns/SubDirectories';
import AuthModal from "./modals/AuthModal";

function Header() {

  return (
    <header className="flex w-full bg-reddit-Grey items-center">
      <AuthModal />
      <Link href="#" className="mx-2 items-center flex">
        <span><Image src={Logo} className="object-cover w-8 h-auto mr-1" alt="Reddit_Logo"/></span>
        <span className="font-extrabold text-3xl hidden md:block">reddit</span>
      </Link>
      <SubDirectories Red_Logo={Red_Logo} />
      <form action='' className="bg-reddit-Dark_Grey hover:border-white hover:bg-reddit-Grey_tint flex px-3 rounded-full items-center border-1 border-reddit_Border mx-3 flex-grow" id="Search">
        <button><MagnifyingGlassIcon className="text-gray-400 h-8 w-8 0.5 p-1"/></button>
          <div className="bg-black text-gray-300 mx-1 px-2 rounded-full items-center flex text-xs py-1">
            <Image src={Red_Logo} width={256} height={256} alt='Sub Reddit Logo' className=" h-4 w-4 mr-2 my-0 icons rounded-full"></Image>
            <span>r/thefinals</span> 
            <XCircleIcon className="h-4 w-4 m-0 ml-2 icons"></XCircleIcon>
          </div>
          <input type="text" className="bg-inherit px-2 py-1 focus:outline-none flex-grow" placeholder="Search Reddit"></input>
      </form>
      <div className="mx-1 flex-row hidden xl:flex">
      {/*Show after Logged In*/}
      {/* <Link href="#" className="ico_btn"> <ShieldExclamationIcon className="icons"/> </Link>
      <Link href="#" className="ico_btn"> <ChatBubbleOvalLeftEllipsisIcon className="icons"/> </Link>
      <Link href="#" className="ico_btn"> <BellIcon className="icons"/> </Link>
      <Link href="#" className="ico_btn"> <PlusIcon className="icons" />  </Link>
      <Link href="#" className="ico_btn p-0 pr-3 pl-1 flex items-center bg-reddit-Dark_Grey rounded-full mr-4"> <MegaphoneIcon className="icons h-5 w-5 mx-1"/><h1 className="text-sm">Advertise</h1> </Link> */}

        <BigButton inverted='true'>Log In</BigButton>
        <BigButton>Sign Up</BigButton>
      </div>
        <UserHeroMenu />
    </header>
  );
}

export default Header;