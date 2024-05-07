import React, { useEffect, useState, useRef } from 'react'

function Login({ showLogin, setShowLogin }: { showLogin: boolean, setShowLogin: React.Dispatch<React.SetStateAction<boolean>> }) {
  const loginRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:4000/login?username=${username}&password=${password}`);
      const data = await response.json();
      console.log(data);
      if (data.success) {
        setShowLogin(false);
      }
    } catch (error) {
    }
  }
  const handleClickOutside = (event: any) => {
    if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
      setShowLogin(false);
    }
  };
  useEffect(() => {
    console.log(showLogin);
  })

useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [showLogin]);

  return (
    <>
    {showLogin ? (
      <div onClick={handleClickOutside} className="addChannelOverlay flex justify-center items-center ">
          <div ref={loginRef} className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center'>
          <div className='bg-white w-[400px] h-[500px] flex flex-col justify-center items-center rounded-md'>
            <h1 className='text-3xl font-bold text-black'>Login</h1>
            <input
                    type='text'
                    placeholder='Email'
                    className='w-[300px] h-10 border border-gray-300 rounded-md mt-4'
                    onChange={(e) => setUsername(e.target.value)}
                    />
            <input
                    type='password'
                    placeholder='Password'
                    className='w-[300px] h-10 border border-gray-300 rounded-md mt-4'
                    onChange={(e) => setPassword(e.target.value)}
                    />
            <button onClick={handleLogin} className='bg-[#205a48] w-[300px] h-10 rounded-md mt-4 text-white font-semibold'>Login</button>
          </div>
        </div>
        </div>
     ) : null}
        </>
  )
}
export default Login