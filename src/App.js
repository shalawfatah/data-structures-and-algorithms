import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavLink from './components/navbar/Link';
import BigONotation from './pages/big-o-notation';
import Home from './pages/home';
import {links} from './store/links';
import {IoIosArrowDroprightCircle} from 'react-icons/io';
import {AiFillCloseCircle} from 'react-icons/ai';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false)
  const showMenu = () => {
    setShow(prev => !prev);
  }
  const closeMenu = () => {
    setShow(false);
  }
  return (
    <BrowserRouter>
      <h1 className="text-5xl font-black text-center m-6 text-red-700">Data Structures and Algorithms</h1>
      {!show && <IoIosArrowDroprightCircle 
        onClick={showMenu}
        className='absolute top-10 left-10 text-3xl text-red-900 hover:text-red-600 transition-all duration-500 cursor-pointer' 
        />}
      {show && <AiFillCloseCircle 
        onClick={closeMenu}
        className='absolute top-10 left-10 text-3xl text-red-900 hover:text-red-600 transition-all duration-500 cursor-pointer' />}
      <ul className={`${show ? 'block' : 'hidden'} absolute top-20 left-10 bg-red-900 text-white p-3 rounded`}>
        {links.map((link, index) => {
          return <NavLink text={`${index + 1}) ${link.text}`} path={link.path} />
        })}
      </ul>
      <Routes>
        <Route path="/" element={ <Home setShow={setShow} /> } />
        <Route path="big-o-notation" element={ <BigONotation setShow={setShow} /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
