// import { useState } from 'react';

import { useEffect, useState } from 'react';
import Contents from './components/Contents/Contents';
import NavBar from './components/NavBar/NavBar';
import Slogan from './components/Slogan/Slogan';

function App() {
  // const [avatar, setAvatar] = useState();
  // useEffect(() => {
  //   //
  //   return () => {
  //     avatar && URL.revokeObjectURL(avatar.file);
  //   };
  // }, [avatar]);
  // const handlePreview = (e) => {
  //   const preview = e.target.files[0];
  //   console.log(URL.createObjectURL(preview));
  //   preview.file = URL.createObjectURL(preview);
  //   setAvatar(preview);
  // };
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleSize);
    handleSize();
    return () => {
      window.removeEventListener('resize', handleSize);
    };
  }, []);
  useEffect(() => {
    if (windowSize.width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto text-white px-4 py-8 bg-gradient-to-b  dark:from-purple-900 dark:to-purple-700 from-white to-purple-700 md:px-20">
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Contents />
      {/* <input type="file" onChange={handlePreview} />
      {avatar !== undefined && (
        <img src={avatar.file} alt="not found" width="80%" />
      )} */}
    </div>
  );
}

export default App;
