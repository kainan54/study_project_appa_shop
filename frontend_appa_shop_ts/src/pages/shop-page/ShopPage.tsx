import React, { useState } from 'react';
import TEMP_DATA from './tempData';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview';

const ShopPage: React.FC = function () {
    const [collections] = useState(TEMP_DATA);

    return (
        <div className="shop-page">
            {collections.map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} {...otherProps} />
            ))}
        </div>
    );
};

export default ShopPage;
