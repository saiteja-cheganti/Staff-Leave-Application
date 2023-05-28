import React from 'react';
import { Outlet } from 'react-router-dom';
import Admin from './components/Admin';
function RootLayout() {
  return (
    <div>
        <div>
            <Admin/>
        </div>
        <div className='container'>
              <Outlet/>
        </div>
    </div>
  )
}

export default RootLayout