const INIT_STATE = {
    hidden: true,
};

export interface Action {
    type: string;
}

export interface RootState {
    hidden: true | false;
}

const cartReducer = function (prevState = INIT_STATE, action: Action): RootState {
    switch (action.type) {
        case 'TOGGLE_CART_DISPLAY':
            return {
                ...prevState,
                hidden: !prevState.hidden,
            };

        default:
            return prevState;
    }
};

export default cartReducer;
