    // takes in user object and sets it to current user in store
export const setCurrentUser = (user) => {
    
    return{
        type: 'SET_USER',
        payload: user,
    }
    
}