import React from 'react';

const htmlString = `.items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .items > li {
    list-style-type: none;
  }
  
  /* styles for small screens */
  @media (max-width: 575.98px) {
    .items {
      
      flex-direction: column;
      align-items: center;
    }
    .items > li {
      margin-bottom: 20px;
      background: yellow;
    }
  }
  
  /* styles for medium screens */
  @media (min-width: 576px) and (max-width: 767.98px) {
    .items > li {
      background: red;
    }
  }
  
  /* styles for large screens */
  @media (min-width: 768px) and (max-width: 991.98px) {
    .items > li {
      background: green;
    }
  }
  
  /* styles for extra-large screens */
  @media (min-width: 992px) {
    .items > li {
      background: pink;
    }
  }
  `;

function NavbarCodeCSS() {
  return <div><pre>{htmlString}</pre></div>;
}

export default NavbarCodeCSS;
