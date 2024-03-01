import React from 'react'
import './ShowVideo.css'
import { Link } from 'react-router-dom'
function ShowVideo({vid}) {
  console.log(vid)
  return (
    <>
     <div>
      <Link to={`/Videopage/${vid?._id}`}>
        <video 
        src={`${vid?.video_src}`}
        className='Video_ShowVideo'
      /> 
      </Link> 
     </div>
     <div className="video_description">
     <div className='Chanel_logo_App'>
      <div className="fstChar_logo_App">
        <>{vid?.Uploder?.charAt(0).toUpperCase()}</>
       </div>
      </div>
      <div className="video_details">
        <p className = 'title_vid_ShowVideo'>title</p>
        <pre className='vid_views_UploadTime'>1-1-2001</pre>
        <pre className='vid_views_UploadTime'>5 views
         <div className="dot"></div>
         Video Uploaded 1 Year ago
         </pre>
      </div>
     </div>
    </>
   
  )
}

export default ShowVideo