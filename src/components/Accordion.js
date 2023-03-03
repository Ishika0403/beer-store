import React, { Fragment, useState } from 'react';
import './Accordion.css'

const Accordion =({id, title, content,handleClick })=> {
  const [isActive, setIsActive] = useState(false);
  
    return (
      <>
      <ul>
        <div onClick={() => setIsActive(!isActive)}>
          <li className='acc_list' key={id}>{title}<span className='acc_sign'>
          {isActive ? "-" : " + "}
          </span></li>
        </div>

        {isActive && 
        <Fragment>
            {content.map((itm)=> 
              <li key={itm.id}  onClick={()=>handleClick(itm.id)}>
                  {itm.display}
              </li>
            )}
        </Fragment>
        }
      </ul>
      {/* left_col_content */}

    </>
  )
}

export default Accordion
