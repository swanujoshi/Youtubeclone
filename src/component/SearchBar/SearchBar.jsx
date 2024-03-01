import React, { useState } from 'react'
import './SearchBar.css'
import SearchList from './SearchList';
import {FaSearch} from 'react-icons/fa'
import {BsMicFill} from 'react-icons/bs'

function SearchBar(){
  const [searchQuery,setSearchQuery] = useState(" ");
  const [SeachListA,setSeachList] = useState(false);
  const TitleArray=["Video1","Video2","Animation video","Movies"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()));
  return (
   
    <div className='SearchBar_Container'>
        <div className="SearchBar_Container2">
            <div className="search_div">
                 <input type='text' className='iBox_SearchBar' placeholder='Search.....'
                 onChange={e=>setSearchQuery(e.target.value)}
                 value={searchQuery}
                 onClick={e=>setSeachList(true)}
                 />
                 <FaSearch className='SearchIcon_SearchBar'
                 onClick={e=>setSeachList(false)}
                 />
                 <BsMicFill className='Mic_SearchBar'/>
                 {
                   searchQuery&&SeachListA&&
                   <SearchList
                   setSearchQuery={setSearchQuery}
                   TitleArray={TitleArray}
                   />
                 }
            </div>
            
        </div>
     
    </div>
   
  )
}

export default SearchBar
