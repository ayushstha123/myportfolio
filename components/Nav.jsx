import React from 'react'

const Nav = () => {
  return (
    
    <div className='flex w-full font-bold bg-blue-500  justify-between  items-center p-5 '>
      <div className='text-4xl'>Ayush</div>  
      <div className='flex flex-row gap-4'>
        <div>
            Home
        </div>
        <div>
            About
        </div>
        <div>
            Projects
        </div>
        <div>
            Contacts
        </div>
        
      </div>
      
    </div>
  )
}

export default Nav