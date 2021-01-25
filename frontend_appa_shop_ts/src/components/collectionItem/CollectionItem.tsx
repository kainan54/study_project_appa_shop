import React from 'react';
import './CollectionItem.css';

interface Props {
    imageUrl?: string;
    price?: number;
    name?: string;
}

const CollectionItem: React.FC<Props> = function ({ imageUrl, price, name }) {
    return (
        <div className="collection-item">
            <div className="collection-image" style={{ backgroundImage: `url(${imageUrl})` }} />

            <div className="collection-footer">
                <span className="collection-name">{name}</span>
                <span className="collection-price">${price}</span>
            </div>
        </div>
    );
};

export default CollectionItem;
