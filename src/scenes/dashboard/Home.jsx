import React, { useState, Suspense,lazy } from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//const Cat = lazy(()=> import ("../../components/Cat"));
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
      <Suspense fallback = "Loading...">
        {/* <Cat/> */}
        Loading
      </Suspense>
      Dashboard
    </div>
  )
}

export default Home;
