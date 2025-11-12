import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer className='font-firacode mx-[15px] mt-[10px] text-[#E4E4E7] flex justify-between'>
        <div className='flex flex-col leading-[2]'>
          <h2 className='text-[15px]'>Quick links</h2>
          <Link className='cursor-pointer' to='/'>Home</Link>
          <Link className='cursor-pointer' to='/about'>About</Link>
          <Link className='cursor-pointer' to='/project'>Project</Link>
          <Link className='cursor-pointer' to='/contact'>Contact</Link>
        </div>
        <div className='flex flex-col leading-[2]'>
          <h2 className='text-[15px]'>Dev</h2>
          <a href="#">Github</a>
        </div>
        <div className='flex flex-col leading-[2]'>
          <h2 className='text-[15px]'>Social</h2>
          <a href="#">X</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </>
  )
}

export default Footer

