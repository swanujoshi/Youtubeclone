import React, { useState } from 'react'
import './comments.css'
import DisplayComments from './DisplayComments';
function Comments() {
    const [commentText , setCommentText] = useState("")
    const commetsList=[
        {  
           _id:"1",
           commentBody:"Hello",
           userCommented:"abc",
        },
        {
            _id:"2",
            commentBody:"Nice",
            userCommented:"CarryMinati",
         },
  ];
    const handleOnSubmit=(e)=>{
        e.preventDefault();
    };
  return (
    <>
     <form className="comments_sub_form_comments" onSubmit={handleOnSubmit} >
        <input type='text'
        onClick={e=>setCommentText(e.target.value)}
        placeholder='Add comment.....'
        className='comment_ibox'/>
        <input type="submit" value="add" className="comment_add_btn_comments" />
     </form>
        <div className="display_comment_container">
            {
                commetsList.map(m=>{
                    return (
                         <DisplayComments
                         cId={m._id}
                         commentBody={m.commentBody}
                         userCommented={m.userCommented}
                         />
                    )
                })
            }
        </div>
       
    </>
  )
}

export default Comments