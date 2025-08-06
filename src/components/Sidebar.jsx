import React from 'react';
import LogoWithCelebration from './LogoWithCelebration';

function Sidebar() {
  return (
    <aside className="h-screen sticky top-0">
      <nav className='h-full flex flex-col bg-gradient-to-b from-orange-50 to-orange-100 w-64 border-r border-orange-200 shadow-lg'>
        {/* Logo Section */}
        <LogoWithCelebration />

        {/* Navigation Links - Empty for now */}
        <ul className='flex-1 px-4 py-6 space-y-2'>
          {/* You can add navigation items here later */}
        </ul>

        {/* User Profile Section */}
        <div className='border-t border-orange-200 p-4 bg-orange-50/50'>
          <div className='flex items-center space-x-3 p-2 rounded-lg hover:bg-orange-100 transition-colors duration-200'>
            <img 
              src="https://w7.pngwing.com/pngs/134/220/png-transparent-person-illustration-india-login-computer-icons-emoticon-medicine-user-login-icon-miscellaneous-text-logo-thumbnail.png"
              className='w-10 h-10 rounded-full border-2 border-orange-400 shadow-sm'
              alt="User Profile" 
            />
            <div className='leading-tight'>
              <h4 className='font-semibold text-orange-800'>Harnoor Singh</h4>
              <span className='text-xs text-orange-600 font-medium'>harnoorsingh071206@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar;