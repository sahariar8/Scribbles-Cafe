import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";


const Blog = ({blog}) => {
    const { cover, title, author_img, author , posted_date ,reading_time} = blog;
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
                <p className='text-slate-500 text-xl font-bold'><CiBookmark /></p>
            </div>
        </div>
    </div>
  )
}

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default Blog