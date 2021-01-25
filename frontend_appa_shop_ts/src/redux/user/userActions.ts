// takes in user object and sets it to current user in store
interface User {
    email: string;
    id: number;
}
interface Action {
    type: 'SET_USER';
    payload: User | null;
}

export const setCurrentUser = (user: User | null): Action => {
    return {
        type: 'SET_USER',
        payload: user,
    };
};
