// intial state will updated with id
const INIT_STATE = {
    currentUser: null,
};

/* 
        User reducer handles state regarding user
        action -> {
            type: 'some string identifier',
            payload: some data from component
        }
    */

interface RootState {
    currentUser: User | null;
}
interface User {
    email: string;
    id: number;
}
export interface Action {
    type: string;
    payload: User | null;
}
const userReducer = function (prevState = INIT_STATE, action: Action): RootState {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...prevState,
                currentUser: action.payload,
            };

        default:
            return prevState;
    }
};

export default userReducer;
