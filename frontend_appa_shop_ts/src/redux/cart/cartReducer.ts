const INIT_STATE = {
    hidden: true,
    cart: [],
};

export interface Action {
    type: string;
    payload: unknown;
}

export interface RootState {
    hidden: true | false;
    cart: Array<unknown>;
}

const cartReducer = function (prevState = INIT_STATE, action: Action): RootState {
    switch (action.type) {
        case 'TOGGLE_CART_DISPLAY':
            return {
                ...prevState,
                hidden: !prevState.hidden,
            };
        case 'ADD_CART_ITEM':
            return {
                ...prevState,
                cart: [...prevState.cart, action.payload],
            };

        default:
            return prevState;
    }
};

export default cartReducer;
