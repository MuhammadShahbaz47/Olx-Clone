const INITIAL_STATE={
    users:[{
        name:"Shahbaz",
        email:"azizterai32@gmail.com"
    },
    {
        name:"Ghous",
        email:"ghous@gmail.com"
    }
]
}

export default (state = INITIAL_STATE,action)=>{
    // console.log("app-action==>",action)
    switch(action.type){
        case "SETDATA":
        return({
            ...state,
            users:[...state.users,action.data]
        })
    default:
    return state;
    }
}