export const addTask = (task, description) =>{
    return{
        type:"ADD_TASK",
        payload:{
            id: new Date().getTime().toString(),
            task : task,
            description:description
        }
    }
}
export const deleteTask = (id) =>{
    return{
        type:"DELETE_TASK",
        id
    }
}
export const markBlue = () =>{
    return {
        type: "MARK_BLUE"
    }
}