import { assets, dummyEducatorData } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { AppContext } from "../../context/AppContext";
import { useContext } from 'react';


const Navbar = () => {

    const {navigate} = useContext(AppContext)

  return (
    <div className={`flex items-center justify-between px-p4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4`}>
      <img onClick={()=> navigate('/')} src={assets.logo} alt="Logo" className='w-10 lg:w-10 cursor-pointer' />
      <div className="hidden md:flex items-center gap-5 text-gray-500">
          <div className="flex items-center gap-5 cursor-pointer">

              <div className="text-primary-100">
              <button className='cursor-pointer' onClick={()=>{navigate('/admin')}}>Admin Board</button> |
               <Link to='/'> Home</Link>
              </div>
          
          </div>

      </div>

      {/* for mobile screens */}
      <div className="md:hidden flex items-center gap-2 sm:gap5 text-gray-500">
         <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs text-secondary">
            
              <>
              <button onClick={()=>{navigate('/')}}>Home</button>
              | <Link to='/admin'> Admin Board</Link>
              </>
           
         </div>
      </div>
    </div>
  );
};

export default Navbar;