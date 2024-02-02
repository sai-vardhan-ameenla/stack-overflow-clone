

const authReducers = ( state ={data :null}, action ={}) => {
    switch (action.type) {
        case 'Auth':
            localStorage.setItem('Profile',JSON.stringify({ ...action?.data}))
            return state
     
        default:
            return state
    }
 
}

export default authReducers
