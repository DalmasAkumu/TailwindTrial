import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex items-center justify-center bg-red-700'>
      <div className='text-4xl text-blue-800'>
        Hello World
      </div>
    </div>
  );
  
}

export default App
