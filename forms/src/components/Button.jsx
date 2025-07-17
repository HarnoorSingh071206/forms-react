import React from 'react'
import{useNavigate} from 'react-router-dom'

function Button() {
    const navigate = useNavigate();
  return (
    <div className='mt-6'>
      <button  onClick={()=>navigate("/NewPage")}  
      className='w-full !bg-orange-500 text-white py-3 px-6 rounded-lg hover:!bg-orange-600 transition-all font-medium'>
        View submitted page
      </button>
    </div>
  )
}

export default Button;