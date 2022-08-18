import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { Yourblogs } from './MyComponents/Yourblogs';
import { Allblogs } from './MyComponents/Allblogs';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { AddBlog } from './MyComponents/AddBlog'
import ReactDOM from "react-dom/client";
import { About } from './MyComponents/About';
import { Home } from './MyComponents/Home';
import { Login } from './MyComponents/Login';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// intializing

function App() {
  let searchedCity = "hsfdhfs"
  const cityInput = useRef(null);
  let initBlog;
  if (localStorage.getItem("blogs") === null) {
    initBlog = [];
  }
  else {
    initBlog = JSON.parse(localStorage.getItem("blogs"));
  }
  let initBlogcopy;
  if (localStorage.getItem("blogsscopy") === null) {
    initBlogcopy = [];
  }
  else {
    initBlogcopy = JSON.parse(localStorage.getItem("blogscopy"));
  }
  let YourBloginitBlog;
  if (localStorage.getItem("YourBlogblogs") === null) {
    YourBloginitBlog = [];
  }
  else {
    YourBloginitBlog = JSON.parse(localStorage.getItem("YourBlogblogs"));
  }

  const searchfxn = () => {
    setblogscopy([]);
    if (cityInput.current.value) searchedCity = cityInput.current.value.toUpperCase(); // to prevent blank condition 
    setblogscopy(blogs.filter((element) => {
      return (element.title.toUpperCase().indexOf(searchedCity) !== -1);
    }))
    if (searchedCity === "hsfdhfs") setblogscopy(blogs)
  }
  const YourBlogBlogsSearchfxn = () => {
    setYourBlogBlogs([]);
    setYourBlogBlogs(blogs.filter((element) => {
      return element.userName.toUpperCase().indexOf("@agarwal".toUpperCase()) !== -1;
    }))
  }
  const addBlog = (title, desc, userName) => {
    let sno;
    if (blogs.length === 0) sno = 1;
    else sno = blogs[blogs.length - 1].sno + 1;
    let myBlog = {
      sno: sno,
      userName: userName,
      title: title,
      desc: desc
    }
    setblogs([...blogs, myBlog]);  // adding todo
  }
  const onDelete = (tparts) => {
    setblogs(
      blogs.filter((e) => {    // filter is a higher order array method 
        return e !== tparts;
      })
    )
  }
  const YourblogsonDelete = (tparts) => {
    setYourBlogBlogs(YourBlogBlogs.filter((e) => {    // filter is a higher order array method 
      return e !== tparts;
    }))
    onDelete(tparts);
  }

  const [blogs, setblogs] = useState(initBlog)            // setToodes fxn update todos
  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(blogs)); // as soon as todos change, do this
    setblogscopy(blogs);
  }, [blogs])
  const [blogscopy, setblogscopy] = useState(initBlogcopy)            // setToodes fxn update todos
  useEffect(() => {
    localStorage.setItem("blogscopy", JSON.stringify(blogscopy)); // as soon as todos change, do this
  }, [blogscopy])
  const [YourBlogBlogs, setYourBlogBlogs] = useState(YourBloginitBlog)            // setToodes fxn update todos
  useEffect(() => {
    localStorage.setItem("YourBlogBlogs", JSON.stringify(YourBlogBlogs)); // as soon as todos change, do this
  }, [YourBlogBlogs])

  return (
    <>
      <Router>
        <Header searchfxn={searchfxn} YourBlogBlogsSearchfxn={YourBlogBlogsSearchfxn} cityInput={cityInput} />
        <Routes>
          <Route exact path="/" element={<Home t={blogscopy} />} />
          <Route exact path="/Yourblogs" element={<Yourblogs t={YourBlogBlogs} YourblogsonDelete={YourblogsonDelete} />} />
          <Route exact path="/Allblogs" element={<Allblogs t={blogs} onDelete={onDelete} />} />
          <Route exact path="/AddBlog" element={<AddBlog addBlog={addBlog} />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;




