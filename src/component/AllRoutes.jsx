import React from 'react'
import Home from '../pages/Home/Home'
import{
    Routes,
    Route,
  } from "react-router-dom";
import Library from '../pages/Library/Library';
import YourVideos from '../pages/YourVideos/YourVideos';
import WatchHistory from '../pages/WatchHistory/WatchHistory';
import WatchLater from '../pages/WatchLater/WatchLater';
import Likedvideo from '../pages/LikedVideos/Likedvideo';
import Videopage from '../pages/Videopage/Videopage';
function AllRoutes() {
  return (
    <Routes>
      <Route path = '/' element={<Home/>}/>
      <Route path = '/Library' element={<Library/>}/>
      <Route path = '/WatchHistory' element={<WatchHistory/>}/>
      <Route path = '/WatchLater' element={<WatchLater/>}/>
      <Route path = '/YourVideo' element={<YourVideos/>}/>
      <Route path = '/LikedVideo' element={<Likedvideo/>}/>
      <Route path = '/Videopage/:vid' element={<Videopage/>}/>
    </Routes>
  )
}

export default AllRoutes
