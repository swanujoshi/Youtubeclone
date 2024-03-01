import React , { useState } from 'react'
import './comments.css'
function DisplayComments({cId,commentBody,userCommented}) {
    const [Edit , setedit] = useState(false)
    const [comtBdy , setCmtBdy] = useState("")
    
    const handleEdit=(ctId,ctBdy)=>{
        setedit(true);
        setCmtBdy(ctBdy);
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        setedit(false);
    }
    
    return (
    <>
    {
        Edit ? (<>
         <form className="comments_sub_form_comments" 
        onSubmit={handleOnSubmit} 
         >
        <input type='text'
        onChange={(e) => setCmtBdy(e.target.value)}
        placeholder='Edit comment.....'
        value={comtBdy}
        className='comment_ibox'/>
        <input type="submit" 
        value="Change" 
        className="comment_add_btn_comments" 
        />
     </form>
        </>):(
             <p className="comment_body">{commentBody}</p>
        )
    }
   
    <p className="usercommented">-{userCommented} commented</p>
    <p className="Editdel_DisplayComment">
        <i onClick={()=>handleEdit(cId,commentBody)}>Edit</i>
        <i>Delete</i>
    </p>
    </>
  )
}

export default DisplayComments