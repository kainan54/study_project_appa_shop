import React, { useState } from 'react';
import './Directory.css';
import MenuItem from '../menu-item/MenuItem';
import menuData from './menuData';

interface MenuItem {
    title: string;
    subTitle?: string;
    imgUrl: string;
    linkUrl: string;
    id: number;
    size?: string;
}

const Directory: React.FC = function () {
    const [menuDataState] = useState<MenuItem[]>(menuData);

    return (
        <div className="directory">
            {menuDataState.map(({ id, ...otherMenuDataProps }) => (
                <MenuItem key={id} {...otherMenuDataProps} />
            ))}
        </div>
    );
};

export default Directory;
