import React, { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
const Home = () => {
  const {pathname} = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  //const theme = useTheme();
  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Home;
