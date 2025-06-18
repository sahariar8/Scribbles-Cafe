import boy1 from '../../assets/images/boy1.png';
const Header = () => {
  return (
    <div className='flex items-center justify-between px-4 h-10 md:h-16 bg-gray-100 shadow-md'>
        <h1 className='text-xl md:text-3xl font-bold text-emerald-600'>Knowledge Cafe</h1>
        <img src={boy1} alt="" className='w-8 h-8 md:w-10 md:h-10 rounded-full' />
    </div>
  )
}

export default Header