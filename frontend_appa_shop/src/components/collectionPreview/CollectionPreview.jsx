import React from 'react';
import './CollectionPreview.css';

import Collectionitem from '../collectionItem/CollectionItem';

function CollectionPreview({ title, items }) {
    return(
        <div className="collection-preview">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <div className="preview">
                {
                    items
                    .filter((item, i) => i < 4)
                    .map(({ id, ...otherItemProps}) => (
                        <Collectionitem key={id} {...otherItemProps} />
                    ))
                }
            </div>

        </div>
    )
}

export default CollectionPreview;