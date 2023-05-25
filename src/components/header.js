import React from 'react'

const Header = () => {
  return (
<div className="topnav bg-light shadow">
  <a className="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <div className="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search" />
      <button type="submit">Submit</button>
    </form>
  </div>
</div>
  )
}

export default Header
