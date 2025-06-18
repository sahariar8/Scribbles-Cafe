
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readTime, setReadTime] = useState(0)
  const [isMarked, setIsMarked] = useState(false);

  const handleBookmark = (blog) => {
    setBookmarks(prev => [...prev, blog])
    setIsMarked(!isMarked);
  }

  const handleReadTime = (reading_time,id) => {
    setReadTime(prev => prev + reading_time);
    setBookmarks(prev => prev.filter(item => item.id !== id)) //or
    // const remainingBookmarks = bookmarks.filter(item => item.id !== id);
    // setBookmarks(remainingBookmarks);
    
  }
  

  

  return (
    <div className='mx-10'>
      
      <Header />
      <div className='md:flex gap-4'>
         <Blogs handleBookmark={handleBookmark} handleReadTime={handleReadTime} isMarked={isMarked} />
         <Bookmarks bookmarks={bookmarks} readTime={readTime} />
      </div>
     
     
    </div>
  )
}

export default App
