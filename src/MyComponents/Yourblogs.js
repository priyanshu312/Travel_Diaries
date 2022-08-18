import React from 'react'
import {BlogItem} from './BlogItem'; // ./BlogItem
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
      
export const Yourblogs = (props) => {
  let myStyle={
    minheight: "100vh",
    margin: "40px auto"
  }
  return (
    <div className='container' style={myStyle} >  
      <h3 className=' text-center' style={{margin: "80px auto"}}>Your Blogs</h3>
      {props.t.length===0 ? " No Blogs to display" : props.t.map((blog)=>{
              return( <BlogItem tparts = {blog}  key={blog.sno} onDelete={props.YourblogsonDelete}/>
              )
      })}
    </div>
  )
}
