import React from 'react';
import { Link } from 'react-router-dom';


function Header(){
  return(
    <header style={headerStyle}>  {/*see if you can change the style like in App.js where you call it!*/}
    <h1>TodoList</h1>
    <Link style={linkStyle} to="/todo-list">Home</Link> | <Link
    style={linkStyle}
    to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle ={
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
