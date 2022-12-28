import { useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineMenu } from 'react-icons/hi';
import useDarkMode from '../../useDarkMode';

const NavBar = (props) => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const handleEvenOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center text-slate-700 dark:text-white text-shadow">
      <div className="flex items-center">
        <div className="text-[20px] font-bold mr-2">NerdCard</div>
        {isDarkMode ? (
          <BsFillSunFill
            size={'24px'}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
          />
        ) : (
          <FaMoon
            size={'24px'}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode(!isDarkMode)}
            
          />
        )}
      </div>
      <ul className="relative md:flex md:gap-10 ml-auto text-[16px] font-semibold ">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={'24px'}
            className="cursor-pointer"
            color="red"
            onClick={handleEvenOpenMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={'24px'}
            className="cursor-pointer"
            onClick={handleEvenOpenMenu}
          />
        ) : (
          <>
            <li className="btn-hover btn-active">Features</li>
            <li className="btn-hover btn-active">Menu</li>
            <li className="btn-hover btn-active">Our Story</li>
            <li className="btn-hover btn-active ml-28">Contact</li>
          </>
        )}
        {openMenu && (
          <div className="absolute right-8 w-max rounded-lg overflow-hidden bg-white text-black text-center text-[13px] z-10">
            <li className="cursor-pointer btn-active-bg btn-active">
              Features
            </li>
            <li className="cursor-pointer btn-active-bg btn-active">Menu</li>
            <li className="cursor-pointer btn-active-bg btn-active">
              Our Story
            </li>
            <li className="cursor-pointer btn-active-bg btn-active">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
