import React, { useState } from 'react';
import TEMP_DATA from './tempData'
import CollectionPreview from '../../components/collectionPreview/CollectionPreview'

function ShopPage() {

    let [collections] = useState(TEMP_DATA);
        
    return (
        <div classname='shop-page'>
            {
                collections.map(({ id, ...otherProps }) => (
                    <CollectionPreview key={id} {...otherProps} />
                ))
            }
        </div>

    )
};

export default ShopPage;