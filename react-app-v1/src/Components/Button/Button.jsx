import React from 'react';
import './Button.css';

function Button({ type, title}) {
  return (
    <button className={"btn '${}'"}>  {/* (?) SyntaxError: Unterminated string constant. (6:23)  ***When adding a line break between the curly braces of '${}'  */}
        {title}
    </button>
  );
}

export default Button; 
