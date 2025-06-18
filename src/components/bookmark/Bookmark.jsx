
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const { title } = bookmark;
  return (
    <div className="border p-4 rounded-xl bg-slate-200 my-2">
        <h1 className='text-2xl font-bold'>{title}</h1>
    </div>
  )
}
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
    readTime: PropTypes.number.isRequired,
}

export default Bookmark