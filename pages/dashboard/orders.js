import DashboardLayout from "../../components/DashboardLayout";
import {useMutation, useQuery} from "react-query";
import axios from "axios";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {setCookie} from "cookies-next";
import {API_URL} from "../../config"
const Orders = () => {
    const [getOrder,setOrder] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);
    const { isLoading, isError, data, error } = useQuery('myData', async () => {
        const response = await axios.get(`${API_URL}/allcustomer`);
        const data = await response;
        return data.data;
    });

    const submitOrderFilters = useMutation(async (formData) => {
        console.log(formData);
        const response = await axios.post(`${API_URL}/admin/getOrders`, formData);
        const orders = await response;
        setOrder(orders.data)
        return orders.data;
    });
    const onSubmit = async (data) => {
        try {
            await submitOrderFilters.mutateAsync(data);
        } catch (error) {
            setErrorMessage(error.message);
        }
    };
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }
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
                            <form className="row g-4 border" onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-md-6">
                                    <div className="row mb-3">
                                        <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Payment
                                            Status:</label>
                                        <div className="col-sm-9">
                                            <select id="inputState" className="form-select" {...register("payment_sts")}>
                                                <option defaultValue={0}>Choose...</option>
                                                <option value={'pending'}>Pending</option>
                                                <option value={'paid'}>Paid</option>
                                                <option value={'refunded'}>Refunded</option>
                                                <option value={'partially_paid'}>Partially Paid</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row mb-3">
                                        <label htmlFor="inputEmail3"
                                               className="col-sm-3 col-form-label ">Fulfillment:</label>
                                        <div className="col-sm-9">
                                            <select id="inputState" className="form-select" {...register("fullfillment_sts")}>
                                                <option defaultValue={'null'}>Choose...</option>
                                                <option value={'unfulfilled'}>Partial</option>
                                                <option value={'shipped'}>Fullfilled</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row mb-3">
                                        <label htmlFor="inputEmail3" className="col-sm-3 col-form-label ">Store Customer
                                            Email:</label>
                                        <div className="col-sm-9">
                                        <select className={"form-select"} {...register("customer")}>
                                            <option value={'null'}>Choose..</option>
                                            {data && data?.data?.map((item,index) => (
                                                <option value={item.email}>{item.email}</option>
                                            ))}
                                        </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="row mb-3">
                                        <label htmlFor="inputEmail3" className="col-sm-3 col-form-label ">Date
                                            Range:</label>
                                        <div className="col-sm-9">
                                            <input type="date" {...register("dateRange")} className="form-control" id="inputCity"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-outline-dark ms-3">Submit</button>
                                </div>

                                <div className="row mt-4">
                                    <div className="col-md-6">
                                        <p>Show Entries</p>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row mb-3 d-flex justify-content-end">
                                            <label htmlFor="inputEmail3"
                                                   className="col-sm-1 col-form-label ">Search:</label>
                                            <div className="col-sm-6">
                                                <input type="text" placeholder="Search..." className="form-control"
                                                       id="inputCity"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* table */}

                                <table className="table  table-striped">
                                    <thead>
                                    <tr>
                                        <th scope="col">Order Number</th>
                                        <th scope="col">Customer Email</th>
                                        <th scope="col">Payment Status</th>
                                        <th scope="col">Order Date</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {getOrder && getOrder?.map((order,index)=> {
                                        return (
                                            <tr>
                                                <td>{order.name}</td>
                                                <td>{order.customer.email}</td>
                                                <td>{order.financial_status}</td>
                                                <td>{order.created_at}</td>
                                                <td><button className={"btn btn-dange"}>Delete</button></td>
                                            </tr>
                                            )
                                    })}
                                    </tbody>
                                </table>
                                {/*<nav aria-label="Page navigation example">*/}
                                {/*    <ul className="pagination justify-content-center">*/}
                                {/*        <li className="page-item disabled">*/}
                                {/*            <a className="page-link">Previous</a>*/}
                                {/*        </li>*/}
                                {/*        <li className="page-item"><a className="page-link" href="#">1</a></li>*/}
                                {/*        <li className="page-item"><a className="page-link" href="#">2</a></li>*/}
                                {/*        <li className="page-item"><a className="page-link" href="#">3</a></li>*/}
                                {/*        <li className="page-item">*/}
                                {/*            <a className="page-link" href="#">Next</a>*/}
                                {/*        </li>*/}
                                {/*    </ul>*/}
                                {/*</nav>*/}
                            </form>
                        </div>
                    </div>
                </div>
            </>


        )} />
        </>
    )
}

export default Orders;