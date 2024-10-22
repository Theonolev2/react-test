import React from 'react';
import { Link } from 'react-router-dom';

const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
  console.log("test")
  // event.preventDefault();
}

const UserMenu: React.FC = () => {
  return(
    <div className="user-menu" onClick={handleClick}>
      <Link to="/new-user">User</Link>
    </div>
  )
};

export default UserMenu;
