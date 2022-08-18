import React from 'react'
import {BlogItem} from './BlogItem'; // ./BlogItem

export const Allblogs = (props) => {
    let myStyle={
        minheight: "100vh",
        margin: "40px auto"
      }
  return (
    <div className='container' style={myStyle} >  
      <h3 className='my-3 text-center'>All Blogs are listed here (not for user)</h3>
      {props.t.length===0 ? " No blogs to display" : props.t.map((blogcopy)=>{
              return( <BlogItem tparts = {blogcopy}  key={blogcopy.snocopy} onDelete={props.onDelete} />)
              })}
    </div>
  )
}
