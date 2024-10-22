import React from 'react';

const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
  console.log("test")
  event.preventDefault();
  alert('You clicked me!');
}

const UserMenu = () => {
  return(
    <div className="user-menu" onClick={handleClick}>
      <p>User</p>
    </div>
  )
};

  export default UserMenu;
