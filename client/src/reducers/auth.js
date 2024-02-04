

const authReducers = ( state ={data :null}, action ) => {
    switch (action.type) {
        case 'auth':
            localStorage.setItem('Profile',JSON.stringify({ ...action?.data}))
            return {...state, data : action?.data }
     
        default:
            return state
    }
 
}

export default authReducers
