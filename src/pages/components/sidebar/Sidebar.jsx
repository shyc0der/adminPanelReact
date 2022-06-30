import React from 'react';
import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Inventory2Icon from '@mui/icons-material/Inventory2';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
         <span className='logo'>shyCoder</span>         
      </div>
      <hr/>
      <div className='center'>
        <ul>
          <li>
            <p className='title'>MAIN</p></li>
            <li>
            <DashboardIcon className='icon'/>
            <span>Dash Board</span>
          </li><p className='title'>Users</p><li>          
            <GroupIcon className='icon'/>
            <span>Users</span>
          </li><p className='title'>LIST</p><li>          
         <LibraryBooksIcon className='icon'/>
            <span>Orders</span>
          </li><li>
         <Inventory2Icon className='icon'/>
            <span>Products</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOptions'></div>
        <div className='colorOptions'></div>
        </div>     
    </div>
  );
}

export default Sidebar;
