import {Head} from "next/head";
import Sidebar from "./Sidebar";
import { useRouter } from "next/router";

const DashboardLayout = ({header,content}) => {
    return(
        <>
        {/*<Head>*/}
        {/*    <title>Artovison | dashboard</title>*/}
        {/*</Head>*/}
            <div className="container-fluid  bg-light">
                <div className={"row vh-100"}>
                    <Sidebar />
                    <div className="col-xl-10 col-lg-9 vh-100 bg-white col-md-8 border">
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout;