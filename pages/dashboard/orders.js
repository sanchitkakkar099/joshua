import DashboardLayout from "../../components/DashboardLayout";
import {useMutation, useQuery} from "react-query";
import axios from "axios";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {setCookie} from "cookies-next";
import {API_URL} from "../../config"
const Orders = () => {
    const [getOrder,setOrder] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:4001/admin/getOrders')
        .then((res) => {
            console.log(res);
            setOrder(res.data.orders)
        }).catch((error) => {
            console.log(error.message)
        })
    }, [])
    return (
        <>
        <DashboardLayout header={"Orders"}  content={(
            <>
                <div className="container-fluid mt-3">
                    <div className="row">
                        <div>
                            <h1>List Order</h1>
                        </div>
                        <div className=" mt-5">
                            <table className="table table-striped">
                                <tr>
                                    <td>Sr. No</td>
                                    <td>Order Id</td>
                                    <td>Price</td>
                                    <td>Is Artovision</td>
                                </tr>
                                {getOrder && getOrder.map((order,index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{order.id}</td>
                                                <td>{order.subtotal_price}</td>
                                                <td>No</td>
                                            </tr>
                                        </>
                                    )
                                })}
                            </table>
                        </div>
                    </div>
                </div>
            </>


        )} />
        </>
    )
}

export default Orders;