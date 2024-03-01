import React from 'react'
import vid from '../../component/Video/vid.mp4'
import './Videopage.css'
import LikeWatchLaterSavebtns from './LikeWatchLaterSavebtns'
import Comments from '../../component/Comments/Comments'
function Videopage() {
  return (
    <>
    <div className="container_videoPage">
        <div className="container2_videoPage">
        <div className="video_display_screen_videopage">
        <video src ={vid} className={"video_ShowVideo_videoPage"}
         controls
        // autoPlay
        ></video>
        <div className="video_details_videoPage">
          <div className="video_btns_title_VideoPage_cont">
               <p className="video_title_VideoPage">Title</p>
               <div className="views_date_btns_VideoPage">
                <div className="views_videoPage">
                5 Views <div className="dot"></div>uploaded 1 year ago
               </div>
               <LikeWatchLaterSavebtns/>

               </div>
          </div>
    
          <div className="channel_details_videoPage">
            <b className="chanel_logo_videoPage">
              <p>C</p>
            </b>
            <p className="chanel_name_videoPage">Channel name</p>
          </div>
          <div className="comments_VideoPage">
            <h2> 
              <u>comments</u>
            </h2>
            <Comments/>
          </div>
        </div>
        </div>
        <div className="moreVideoBar">
          More Video
        </div>
        </div>
    </div>
    </>
  )
}

export default Videopage