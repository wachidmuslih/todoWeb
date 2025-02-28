import { Outlet } from "react-router";

export default function HomePage() {
    return (
        <div>
            <h1 className="text-blue-500 text-6xl text-center">Home</h1>
            <Outlet />
        </div>
    )
}