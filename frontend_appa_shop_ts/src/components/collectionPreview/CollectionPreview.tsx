import React from 'react';
import './CollectionPreview.css';
import Collectionitem from '../collectionItem/CollectionItem';

interface Item {
    name: string;
    imageUrl: string;
    price: number;
    id: number;
}
interface Props {
    title: string;
    items: Array<Item>;
}

const CollectionPreview: React.FC<Props> = function CollectionPreview({ title, items }) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((_item: Item, i: number) => i < 4)
                    .map(({ id, ...otherItemProps }: Item) => (
                        <Collectionitem key={id} {...otherItemProps} />
                    ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
