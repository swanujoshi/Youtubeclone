import React, { useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {MdPlaylistAddCheck} from 'react-icons/md'
import {AiFillDislike, AiOutlineDislike,AiFillLike,AiOutlineLike} from 'react-icons/ai'
import {RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine} from 'react-icons/ri'
import './LikeWatchLaterSavebtns.css'

function LikeWatchLaterSavebtns() {
  const [SAveVideo,setSAveVideo] = useState(true);
  const [Dislikebtn ,setDislikeBtn] = useState(false);
  const [likebtn ,setlikeBtn] = useState(false);

  const toggleSavedVideo=()=>{
    if(SAveVideo){
      setSAveVideo(false);
    }else{
      setSAveVideo(true);
    }
  }
  const toggleLikeBtn=()=>{
    if(likebtn){
       setlikeBtn(false);
    }else{
       setlikeBtn(true);
    }
  }
  const toggleDislikeBtn=()=>{
    if(Dislikebtn){
       setDislikeBtn(false);
    }else{
       setDislikeBtn(true);
    }
    
  }
  return (
    <div className='btns_cont_videoPage'>
        <div className="btn_VideoPage">
            <BsThreeDots/>
        </div>
        <div className="btn_VideoPage">
        <div className="like_videoPage" onClick={()=>toggleLikeBtn()}>
            {likebtn ? ( 
              <>
              <AiFillLike size={22} className='btns_videoPage'/>
          
            </>
            ) : ( 
              <>
              < AiOutlineLike size={22} className='btns_videoPage'/>
              
            </>
            )}
              <b>1</b>
           </div>
        <div className="like_videoPage" onClick={()=>toggleDislikeBtn()}>
            {Dislikebtn ? ( 
              <>
              <AiFillDislike size={22} className='btns_videoPage'/>
          
            </>
            ) : ( 
              <>
              < AiOutlineDislike size={22} className='btns_videoPage'/>
              
            </>
            )}
              <b>Dislike</b>
           </div>
          <div className="like_videoPage" onClick={()=>toggleSavedVideo()}>
            {SAveVideo ? ( 
              <>
              <RiPlayListAddFill size={22} className='btns_videoPage'/>
            <b>Save</b>
            </>
            ) : ( 
              <>
              <MdPlaylistAddCheck size={22} className='btns_videoPage'/>
              <b>Saved</b>
            </>
            )}
          </div>
          <div className="like_videoPage">
           <>
              <RiHeartAddFill size={22} className='btns_videoPage'/>
            <b>Thanks</b>
            </>
         </div>
         <div className="like_videoPage">
           <>
              <RiShareForwardLine size={22} className='btns_videoPage'/>
            <b>Share</b>
            </>
        </div>
        </div>
        </div>
  )
}

export default LikeWatchLaterSavebtns