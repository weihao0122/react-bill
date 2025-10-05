import { Outlet } from "react-router-dom"
const Layout=()=>{
    return (
        <div>
            <Outlet />
            是layout
        </div>
    )
}

export default Layout