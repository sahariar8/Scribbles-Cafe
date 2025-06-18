import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog,handleBookmark,handleReadTime,isMarked}) => {
    const { id, cover, title, author_img, author , posted_date ,reading_time,hashtags} = blog;
   
    const date = new Date(posted_date);
    const formatedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
  return (
    <div>
        <img src={cover} alt={title} className='w-full rounded-md h-[450px]' />
        <div className='flex justify-between my-4'>
            <div className='flex justify-evenly items-center gap-4'>
                <div>
                    <img src={author_img} alt={author} className='rounded-full w-14 h-14' />
                </div>
                <div>
                    <p className='font-bold text-lg'>{author}</p>
                    <p className='text-slate-500 text-sm font-semibold'>{formatedDate}</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <p className='text-slate-500 text-sm font-semibold'>0{reading_time} min read</p>
                <button className={`text-xl font-bold mb-8 ${isMarked ? 'text-red-500 ' : 'text-slate-500 '}`} onClick={()=>handleBookmark(blog)}><CiBookmark /></button>
            </div>
        </div>
        <div className='my-2'>
            <h1 className='text-3xl font-bold'>{title}</h1>
        </div>
        <div className='my-4'>
            {
                hashtags.map((tag, index) => (
                    <span key={index} className='bg-slate-200 text-slate-500 px-2 py-1 rounded-md text-sm font-semibold mr-2 mb-2'>
                        {tag}
                    </span>
                ))
            }
        </div>

         <button className='text-purple-700 text-sm font-semibold underline my-4' onClick={() => handleReadTime(reading_time,id)}>Mark as read</button>
    </div>
  )
}

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleBookmark:PropTypes.func.isRequired,
    handleReadTime:PropTypes.func.isRequired,
    isMarked:PropTypes.bool.isRequired,
}

export default Blog