import React from 'react';
import Navbar from '../Header/navbar';
import Footer from '../Footer/footer';
import Trending from '../Trending/Trendingmovies';
import Genre from '../Genre/genre';
import Recommended from '../Recommended/Recommended';
import { useState, useEffect } from 'react';


const Home = () => {

  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const [creds, setCreds] = useState(null);
  useEffect(() => {
    let storedCreds = localStorage.getItem('user_cenima');
    if (storedCreds != null) {
      setCreds(JSON.parse(storedCreds))
      setIsLoggedIn(true);
    }
  }, []);


  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} creds={creds} />
      <br />
      <Recommended isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} creds={creds} />
      <br />
      <Trending isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} creds={creds} />
      <br />
      <Genre />
      <br />
      <Footer />
    </>
  );
}

export default Home;
