
import propTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';


const Bookmarks = ({bookmarks,readTime}) => {

  return (
    <div className="w-1/3 p-4 bg-slate-300 mt-4 rounded-md">
      <div className='bg-slate-200 p-1 rounded-md mb-4'>
        <h1 className='text-2xl font-bold text-center my-4 text-red-500'>Total Read Time: {readTime} min</h1>
      </div>
        <div className='bg-slate-200 p-1 rounded-md mb-4'>
          <h1 className='text-xl font-bold text-center my-4 text-emerald-600'>Bookmarked Blogs:{bookmarks.length}</h1>
        </div>
        <div>
           {
              bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark} />)
           }
        </div>
    </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: propTypes.array.isRequired,
    readTime: propTypes.number.isRequired,
}

export default Bookmarks