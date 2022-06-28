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
            <p className='title'>MAIN</p>
            <DashboardIcon/>
            <span>Dash Board</span>
          </li><li>
          <p className='title'>Users</p>
            <GroupIcon/>
            <span>Users</span>
          </li><li>
          <p className='title'>LIST</p>
         <LibraryBooksIcon/>
            <span>Orders</span>
          </li><li>
         <Inventory2Icon/>
            <span>Products</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>color options</div>     
    </div>
  );
}

export default Sidebar;
