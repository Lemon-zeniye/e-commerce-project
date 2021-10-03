const Form = ({setTodo, setTodos, todo, todos}) => {
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, todo])
    }
    return(
        <form onSubmit={ submitHandler }>
            <input onChange={(e) => setTodo(e.target.value) } type="text" />
            <button>submit</button>
        </form>
    )
}
export default Form;