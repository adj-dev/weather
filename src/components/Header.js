import React from 'react';

function Header(props) {
  return (
    <div className="header">
      <div className="title">Weather App</div>
      <div className="credit">
        <a href="https://darksky.net/poweredby/">Powered by Dark Sky</a>
      </div>
    </div>
  );
}

export default Header;
