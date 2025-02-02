import { IconTrash } from "@tabler/icons-react"

const TodoList = () => {
    return (
        <div className="w-[400px]">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Daftar Todo</h2>
            <ul className="flex flex-col gap-y-2 font-archivo font-normal text-gray-800 text-base">
                <li className="flex justify-between p-4 bg-gray-50 border-[1px] border-[#EEEEEE] border-solid rounded-lg hover:bg-gray-100 ">
                    <span className="mr-2">Ini catatan yoyiggiyo</span>
                    <button className="text-red-500 flex items-center gap-x-2">
                        <IconTrash size={20} color="#fb2c36" />
                        {/* <span>Hapus</span> */}
                    </button>
                </li>
                <li className="flex justify-between p-4 bg-gray-50 border-[1px] border-[#EEEEEE] border-solid rounded-lg hover:bg-gray-100 ">
                    <span className="mr-2">Ini catatan yoyiggiyo</span>
                    <button className="text-red-500 flex items-center gap-x-2">
                        <IconTrash size={20} color="#fb2c36" />
                        {/* <span>Hapus</span> */}
                    </button>
                </li>
                
            </ul>
            

        </div>
    )
}

export default TodoList