import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'

function WHLVideoList({Page,videoList}) {
  return (
   <>
   {
        videoList.map(m=>{
            return(
                <>
                <ShowVideoList videoId={m._id} key={m._id}/>
                </>
            )
        })
   }
   </>
  )
}

export default WHLVideoList