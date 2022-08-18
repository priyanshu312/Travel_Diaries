import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

export const AddBlog = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [userName, setuserName] = useState("");
    const submit = (e)=>{
        e.preventDefault(); 
        if(!title || !desc || !userName) alert("Please fill all the details");
        else{
        props.addBlog(title,desc,userName);
        setTitle("");
        setDesc("");
        setuserName("");
        }
    }
    return (
        <div className='container' style={{ margin: "176px auto 0px auto" }}>
            <h3>Add a Blog</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">City</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">userName</label>
                    <input type="text" value={userName} onChange={(e) => setuserName(e.target.value)} className="form-control" id="userName" />
                </div>
                <button type='submit' className="btn btn-primary btn-sm btn-success">Add Blog</button>
            </form>
        </div>
    )
}
