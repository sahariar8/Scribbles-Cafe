
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  return (
    <>
      
      <Header />
      <div className='md:flex'>
         <Blogs />
         <Bookmarks />
      </div>
     
     
    </>
  )
}

export default App
