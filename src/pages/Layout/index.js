import { Outlet } from "react-router-dom"
import { Button } from "antd-mobile"
const Layout=()=>{
    return (
        <div>
            <Outlet />
            是layout
            <Button color="primary">全局测试</Button>
            <div className="purple-theme">
                <Button color="primary">局部测试</Button>
            </div>
        </div>
    )
}

export default Layout