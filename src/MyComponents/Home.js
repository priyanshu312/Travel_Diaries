import React from 'react'
import {BlogItem} from './BlogItem'; // ./BlogItem

export const Home = (props) => {
    let myStyle={
        minheight: "100vh",
        margin: "40px auto"
      }
  return (
    <div className='container' style={myStyle} >  
      <h3 className='my-3 text-center'>Read here the city tour blogs!</h3>
      {props.t.length===0 ? " No Blogs to display" : props.t.map((blogcopy)=>{
              return( <BlogItem tparts = {blogcopy}  key={blogcopy.snocopy} />)
              })}
    </div>
  )
}
