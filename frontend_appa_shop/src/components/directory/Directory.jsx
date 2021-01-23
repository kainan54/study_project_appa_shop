import React, { useState } from 'react';
import './Directory.css';
import MenuItem from '../menu-item/MenuItem';
import menuData from './menuData';
function Directory() {

    let [menuDataState] = useState(menuData)

    return (
        <div className="directory">
          
            {menuDataState.map(({ id, ...otherMenuDataProps }) =>
                <MenuItem key={id} {...otherMenuDataProps} />)
            }
          
        </div> 
    );
};

export default Directory;