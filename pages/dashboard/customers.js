import DashboardLayout from "../../components/DashboardLayout";
import {useRouter} from "next/router";
import {useEffect} from "react";
import axios from "axios";
import { useQuery } from 'react-query';
import {API_URL} from "../../config"
const Customers = () => {
    const Router = useRouter()
    const handleAddCustomer = () => {
        Router.push('/dashboard/addCustomer')
    }
    const { isLoading, isError, data, error } = useQuery('myData', async () => {
        const response = await axios.get(`${API_URL}/allcustomer`);
        const data = await response;
        console.log(data.data)
        return data.data;
    });
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <>
            <DashboardLayout content={(
                <>
                    <div className={"row p-5 bg-white justify-content-center"}>
                        <div className={"col-md-9 "}>
                            <button className={"btn btn-primary my-3"} onClick={handleAddCustomer}>
                                Add Stores
                            </button>
                            <table className={"table table-striped table-bordered"}>
                                <thead>
                                    <tr>
                                        <td>Sr. No.</td>
                                        <td>Store Customer Name</td>
                                        <td>Store Customer Email</td>
                                        <td>Store URL</td>
                                        <td>Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {data?.data?.map((item,index) => (
                                    <tr key={item._id}>
                                        <td>{index+1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.store_url}</td>
                                        <td>
                                            <button className={"btn btn-danger"}>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )} />
        </>
    )
}

export default Customers;