'use client'
import BigButton from "../Tools/BigButton";
import { useAuthStore, useModalType } from '@/src/store';

function LoginSignUp() {
  
  const {setAuthVisible} = useAuthStore();
  const {setModalType} = useModalType();

  const logBtn = () => {
    setModalType('login');
    setAuthVisible('block');
  }

  const regBtn = () => {
    setModalType('register');
    setAuthVisible('block');
  }

  return (
    <div className="mx-1 flex-row hidden xl:flex">
      {/*Show after Logged In
      <Link href="#" className="ico_btn"> <ShieldExclamationIcon className="icons"/> </Link>
      <Link href="#" className="ico_btn"> <ChatBubbleOvalLeftEllipsisIcon className="icons"/> </Link>
      <Link href="#" className="ico_btn"> <BellIcon className="icons"/> </Link>
      <Link href="#" className="ico_btn"> <PlusIcon className="icons" />  </Link>
      <Link href="#" className="ico_btn p-0 pr-3 pl-1 flex items-center bg-reddit-Dark_Grey rounded-full mr-4">   <MegaphoneIcon className="icons h-5 w-5 mx-1"/><h1 className="text-sm">Advertise</h1> </Link> 
      */}
      <BigButton inverted='true' onClick={() => logBtn()}>Log In</BigButton>
      <BigButton onClick={() => regBtn()}>Sign Up</BigButton>
    </div>
  )
}

export default LoginSignUp;