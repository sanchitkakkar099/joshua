import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";
import { API_URL } from "../../config"
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useMutation, useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { getCookie } from "cookies-next";
// export default Products;
const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [newProduct, setNewProduct] = useState([]);
    const [successAlert, setsuccessAlert] = useState('')
    useEffect(() => {
        // const currentPage = currentPage;
        const limit = 12;
        const offset = (currentPage - 1) * limit;
        axios.get(`http://127.0.0.1:8000/api/get/artovision/products`)
            .then((res) => {
                const numProducts = 10; // Replace with actual total number of products
                const numPages = Math.ceil(numProducts / limit);
                const products = res.data
                // console.log(products)
                setNewProduct(products.products)
            })
    }, []);
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
    // Create New Product to the Customer Store
    const handleCreateNewProduct = (datas) => {
        // event.preventDefault()
        const bodyData = {
            product: datas,
            store_name: 'xavatesting.myshopify.com'
        }
        console.log(bodyData)
        axios.post(`http://127.0.0.1:8000/api/create/new/products`, bodyData).then((res) => {
            setsuccessAlert(res.data.message)
            // console.log(res);
        }).catch((err) => {
            console.log(err)
            setsuccessAlert(err)
        })
    }
    return (
        <>
            <DashboardLayout header={"Products"}
                content={
                    (<>
                        <Container>
                            <div className="row">
                                <div>
                                    <h1>List Product</h1>
                                </div>
                            </div>
                            {<div className=" mt-5">
                                {/* <form className="row g-4" >
                                    <div className="col-md-12">
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail3" className="col-sm-3 col-form-label ">Store Customer
                                                Email:</label>
                                            <div className="col-sm-9">
                                                <select className={"form-select"} {...register("customer")}>
                                                    <option value={'null'}>Choose..</option>
                                                    {data && data?.data?.map((item, index) => (
                                                        <option value={item.email}>{item.email}</option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </form> */}
                                <div className="row">
                                    <div className="alert alert-info">
                                        Click on the Create Button to Create the Artovision Product in your store.
                                    </div>
                                </div>
                                {successAlert &&
                                    <div className="row">
                                        <div className="alert alert-info">
                                            {successAlert}
                                        </div>
                                    </div>
                                }
                            </div>}
                            <table className="table  table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Product Title</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Product Thumbnail</th>
                                        <th scope="col">Product Tags</th>
                                        {/*<th scope="col">Order Date</th>*/}
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {newProduct && newProduct?.map((product, index) => {
                                        console.log(product)
                                        // const tagToCheck = "Artovision";
                                        // const hasTag = product.tags.split(',').some(tag => tag.trim() === tagToCheck);
                                        // if (!hasTag) {
                                        return (
                                            <tr key={index}>
                                                <td>{product.title}</td>
                                                <td>{product.status}</td>
                                                <td>
                                                    <img src={product.image?.src} className="img-thumbnail w-25" />
                                                </td>
                                                <td>{product.tags}</td>
                                                {/*<td>{product.created_at}</td>*/}
                                                <td><button className={"btn btn-info"} onClick={() => handleCreateNewProduct(product)}>Create</button></td>
                                            </tr>
                                        )
                                        // }
                                    })}
                                </tbody>
                            </table>
                            {/* <div className="flex justify-center mt-4"> */}
                            {/* render the previous page button */}
                            {/* {currentPage > 1 && (
                                    <button
                                        className="mx-1 px-4 py-2 rounded bg-white text-blue-500 hover:bg-gray-100"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    >
                                        &#x2190;
                                    </button>
                                )} */}

                            {/* render the current page number */}
                            {/* <span className="mx-1 px-4 py-2 rounded text-primary">{currentPage}</span> */}

                            {/* render the next page button */}
                            {/* {currentPage < Math.ceil(newProduct.length / itemsPerPage) && (
                                    <button
                                        className="mx-1 px-4 py-2 rounded bg-white text-blue-500 hover:bg-gray-100"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >
                                        &#x2192;
                                    </button>
                                )} */}
                            {/* </div> */}
                        </Container>

                    </>)
                }

            />
        </>
    )
}

export default Products;
