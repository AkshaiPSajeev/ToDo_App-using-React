export const reducer=(state,action)=>{
   
    if(action.type==='add')
    return {todos:[...state.todos,{text:action.todo,complete:false,id:Date.now()}]}
    if(action.type==='delete'){
        console.log('inside delete')
        return {todos:state.todos.filter((todo)=>{
            return todo.id!=action.id;
        })}
    }

    if(action.type==='complete'){
        console.log('here it is');
        console.log(action.id)
        return {todos:[state.todos.map((todo)=>{
            if(action.id==todo.id){
                todo.complete=true;
            }
            return todo;
        })]}
    }
   
}

