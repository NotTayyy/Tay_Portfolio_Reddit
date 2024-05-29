'use client'
import Input from '@/Components/Tools/Input'
import BigButton from '../Tools/BigButton';
import { useState} from 'react';
import axios from 'axios';
import { ClickOutHandler } from 'react-clickout-ts';


function AuthModal() {
  const [modalType, setModalType] = useState('login');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [modalVisibility, setModalVisibility] = useState('block');



  function register(e: any) {
    e.preventDefault();
    const data = {email, username, password}
    axios.post('http://localhost:4000/register', data, {withCredentials:true})
  }

  return(
    <span className={`w-full h-full absolute top-0 left-0 z-20 bg-black bg-opacity-60 flex ${modalVisibility}`}>
    <ClickOutHandler onClickOut={() => setModalVisibility('hidden')}>
      <div className="border-reddit_Border border-1 w-1/3 bg-reddit-Dark p-12 text-gray-300 mx-auto flex self-center flex-col">
        {modalType === 'login' && (
          <h1 className='text-2xl mb-1'>LOGIN</h1>
        )}
        {modalType === 'register' && (
          <>
            <h1 className='text-2xl mb-1'>SIGN UP</h1>
            <p className='mb-3'>By continuing, you agree to our User Agreement and acknowledge that you understand the Privacy Policy.</p>
          </>
        )}
        <hr className="bg-reddit_Border my-4 mx-2 border-0 h-0.5" />
        {modalType === 'register' && (
          <label>
            <span className='text-reddit-Dark_Tint mb-1'>e-mail:</span>
            <Input type="email" value={email} onChange={(e:any) => setEmail(e.target.value)}/>
          </label>
        )}
        <label>
          <span className='text-reddit-Dark_Tint mb-1'>username:</span>
          <Input type="text" value={username} onChange={(e:any) => setUsername(e.target.value)}/>
        </label>
        <label>
          <span className='text-reddit-Dark_Tint mb-1'>password:</span>
          <Input type="password" value={password} onChange={(e:any) => setPassword(e.target.value)}/>
        </label>
        <div>
        {modalType === 'login' && (
          <>
            <BigButton className='w-full rounded-md py-2 mb-2'>Log In</BigButton>
            <button className='text-blue-500 hover:underline hover:text-blue-700 mb-2'>Forgot password?</button>
            <p>new to reddit? <button className='text-blue-500 hover:underline hover:text-blue-700' onClick={() => setModalType('register')}>Sign Up!</button></p>
          </>
          
        )}
        {modalType === 'register' && (
          <>
            <BigButton onClick={(e: any) => register(e)} className='w-full rounded-md py-2 mb-2'>Sign Up!</BigButton>
            <p>already have an account? <button className='text-blue-500 hover:underline hover:text-blue-700' onClick={() => setModalType('login')}>Login!</button></p>
          </>
        )}
          
        </div>
      </div>
    </ClickOutHandler>
    </span>
    
  )
}

export default AuthModal;