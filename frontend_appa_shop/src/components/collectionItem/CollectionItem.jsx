import React from 'react';
import './CollectionItem.css';

function CollectionItem({ imageUrl, price, name, id}) {

    return (
        <div className="collection-item">
            <div 
                className="collection-image"
                style={{ backgroundImage: `url(${imageUrl})`}}
            />

            <div className="collection-footer">
                <span className="collection-name">
                    {name}
                </span>
                <span className="collection-price">
                    ${price}
                </span>
            </div>
        </div>
    );
};

export default CollectionItem;