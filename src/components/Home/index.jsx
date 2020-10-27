import React from 'react';
import Header from '../shared/Header';
import {Link} from 'react-router-dom';
// You need to import your shared header...

const Home = () => {
  return (
    <>
       <Header/>
    <button >
      <Link to ="/About">About</Link>
    </button>
    </>
  );
}
 
export default Home;