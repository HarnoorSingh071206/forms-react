/*
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Body from './body';

function Layout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        toggleSidebar={toggleSidebar} 
      />
      <Body isSidebarCollapsed={isSidebarCollapsed} />
    </div>
  );
}

export default Layout; */