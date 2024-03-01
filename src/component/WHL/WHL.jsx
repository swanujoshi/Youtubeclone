import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import './WHL.css'
import WHLVideoList from './WHLVideoList'
function WHL({Page,videoList}) {
  return (
    <div className='container_pages_App'>
    <LeftSidebar/>
    <div className="container2_pages_App">
        <p className="conatainer_whl">
            <div className="box_WHL leftside_whl">
                <b>Your {Page} Shown Here</b>
                {
                    Page==="History"&&
                   <div className="clear_History_btn">
                    Clear History
                </div>

                }
            </div>
            <div className="rightSide_whl">
                <h1>{Page}</h1>
                <div className="whl_list">
        <WHLVideoList
        Page={Page} videoList={videoList}/>
                </div>
            </div>
        </p>
    </div>
     </div>
  )
}

export default WHL