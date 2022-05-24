import React from 'react';
import Screen from './screen';

function Mainscreen( {question , answer } ) {
    return ( 
        <div className="screen">
            <Screen value={question} />
            <Screen value={answer} />
        </div>
     );
}

export default Mainscreen;