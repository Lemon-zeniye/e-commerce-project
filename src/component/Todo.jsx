const Todo = ({todos}) =>{
    return(
        <div>  
            {
                todos < 0 ? <div> There is no post </div> :
                todos.map(todo => (
                    <div>
                        <li>{todo}</li>
                    </div>
                ))
            }
        </div>
    )
}
export default Todo;