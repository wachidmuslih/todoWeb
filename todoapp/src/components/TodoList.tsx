
const TodoList = () => {
  return (
    <div className="w-[400px]">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Daftar Todo</h2>
        <ul className="flex flex-col gap-y-2 font-archivo font-normal text-gray-800 text-base">
            <li className="flex p-4 bg-gray-50 border-[1px] border-[#EEEEEE] border-solid rounded-lg hover:bg-gray-100 ">Ini catatan yoyiggiyo</li>
            <li className="flex p-4 bg-gray-50 border-[1px] border-[#EEEEEE] border-solid rounded-lg hover:bg-gray-100 ">Ini catatan yoyiggiyo</li>
        </ul>
    </div>
  )
}

export default TodoList