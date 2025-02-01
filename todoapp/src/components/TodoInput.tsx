const TodoInput = () => {
    return (
        <div className="flex gap-2 mb-2">
            <input type="text" placeholder="Add a todo" className="font-archivo bg-surface p-4 border-solid border-[1px] border-border rounded-lg focus:outline-none focus:border-primary focus:border-2 "/>
            <button className="font-archivo font-semibold text-white bg-primary p-4 rounded-lg hover:bg-primary-hover">Add</button>
        </div>
    )
}

export default TodoInput;