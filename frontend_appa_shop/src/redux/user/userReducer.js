
// intial state will updated with id
const INIT_STATE = {
    currentUser: null
};
    /* 
        User reducer handles state regarding user
        action -> {
            type: 'some string identifier',
            payload: some data from component
        }
    */
const userReducer = function (prevState=INIT_STATE, action) {
    
    switch (action.type) {
        case 'SET_USER':
            console.log('inreduce', action.payload)
            return { 
                ...prevState, 
                currentUser: action.payload 
            }

        
        default: 
        return prevState 
    };
};

export default userReducer;