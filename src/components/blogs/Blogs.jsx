import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmark,handleReadTime}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
  return (
    <div className="w-2/3 mt-4">
        {/* <h1 className="text-3xl font-bold text-center text-green-600">Blogs:{blogs.length}</h1> */}
        {
            blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleReadTime={handleReadTime} />)
        }
    </div>
  )
}

Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleReadTime: PropTypes.func.isRequired,
}
export default Blogs