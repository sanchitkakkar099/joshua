import {useUserStore} from "../../public/store/userStore";
import {useRouter} from "next/router";
import {useEffect} from "react";
import DashboardLayout from "../../components/DashboardLayout";
const Dashboard = () => {
    const user = useUserStore((state) => state.user);
    const Router = useRouter()
    useEffect(()=>{
        if(!user){
            Router.push('/')
        }
    })
    return(
        <>
            <DashboardLayout header={"Dashboard"} content={(
                <>
                    <div className={"row p-4 bg-white-500"}>
                        Dashboard Anaytics or Graphs
                    </div>
                </>
            )} />
        </>
    )
}

export default Dashboard;