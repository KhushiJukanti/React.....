const initialState = {
    contacts:[
        {
            id:1,
            name:"test1",
            phone:222222,
            email:"test1@gmail.com",
            address:"Hyd"
        }
    ]
}

function ContactReducer(state=initialState,action){
    if(action.type === "LIST_CONTACTS"){
        return state;
    }else if(action.type === "ADD_CONTACTS"){
        return{
            contacts:[...state.contacts, action.payload]
        }

    }else{
        return state;
    }
}
export default ContactReducer