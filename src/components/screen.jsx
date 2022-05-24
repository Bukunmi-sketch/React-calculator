import React from 'react';


function Screen(props) {
    return (  
       <div className="screenrow">
           <input type="text"  value={props.value} readOnly />
       </div>   
    );
}


export default Screen;