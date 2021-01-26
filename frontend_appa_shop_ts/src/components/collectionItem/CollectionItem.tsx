import React from 'react';
import './CollectionItem.css';
import DynaButton from '../dynamic-button/DynaButton';
import { connect, ConnectedProps } from 'react-redux';
import { addItem } from '../../redux/cart/cartActions';

interface ItemData {
    id: number;
    price: number;
    name: string;
    imageUrl: string;
}
interface ActionObj {
    type: string;
    payload: ItemData;
}

interface Dispatch {
    (actionObj: ActionObj): void;
}

const mdp = (dispatch: Dispatch) => ({
    addItem: (item: ItemData) => dispatch(addItem(item)),
});
const connector = connect(null, mdp);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
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
            <DynaButton type="button">Add to Cart</DynaButton>
        </div>
    );
};

export default connector(CollectionItem);
