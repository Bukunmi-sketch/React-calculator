import React from 'react';

function Button({ label , clickit }) {
    console.log(clickit);
    return (  
        <input type="button" value={label} onClick={clickit}/>
       
    );
}

export default Button;