import React from 'react';

const htmlString = `<div class="home-container">
<div class="heading">
  <h1>create a navbar with three items and show the code
    and make it responsive
  </h1>
</div>
<div class="layout">
  <div class="listItems">
    <ul class="items">
      <li class="item">item 1</li>
      <li class="item">item 2</li>
      <li class="item">item 3</li>
    </ul>
  </div>
</div>
<div class="code">
</div>
</div>`;

function CodeHTML() {
  return <div><pre>{htmlString}</pre></div>;
}

export default CodeHTML;
