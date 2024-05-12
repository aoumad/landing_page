import React, { useEffect, useState, useRef } from 'react';

function Login({
  showLogin,
  setShowLogin,
}: { showLogin: boolean; setShowLogin: React.Dispatch<React.SetStateAction<boolean>> }) {
  const loginRef = useRef<HTMLDivElement>(null);
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loginState, setLoginState] = useState<'pending' | 'success' | 'error'>('pending');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`http://localhost:4000/login?username=${username}&password=${password}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Login failed with status: ${response.status}`);
      }

      if (data.success) {
        setLoginState('success');
        setErrorMessage('You have logged in successfully.');
      } else {
        setLoginState('error');
        setErrorMessage(data.message || 'Login failed.');
      }
    } catch (error) {
      setLoginState('error');
      setErrorMessage('An error occurred during login. Please try again.');
      console.error('Login error:', error);
    }
  };

  const handleClickOutside = (event: any) => {
    if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
      setShowLogin(false);
    }
  };

  useEffect(() => {
    if (showLogin) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLogin]);

  const handleLoginStateClass = () => {
    switch (loginState) {
      case 'success':
        return 'text-green-500';
      case 'error':
        return 'text-red-500';
      default:
        return '';
    }
  };

  if (!showLogin)
    return null;

  return (
    <>
      {/* {showLogin ? ( */}
      {/* <div className="addChannelOverlay flex justify-center items-center "> */}
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
              {errorMessage && <p className={`${handleLoginStateClass()} text-xl font-bold mt-4`}>{errorMessage}</p>}
            </div>
          </div>
        {/* </div> */}
      {/* ) : null} */}
    </>
  );
}

export default Login;