import React from 'react';

const DescriptionContainer = ({setrandomImageNumberHandler, content ,randomImageNumber}) => {
    return ( 
        <div>
            <p>
           {content[randomImageNumber].title}
            </p>
            <p>
           {content[randomImageNumber].text1}
            </p>    <p>
           {content[randomImageNumber].text2}
            </p>    <p>
           {content[randomImageNumber].text3}
            </p>
            <button onClick={()=>setrandomImageNumberHandler()} className='btn btn-primary btn-lg'>Randomize</button>
        </div>
     );
}
 
export default DescriptionContainer;