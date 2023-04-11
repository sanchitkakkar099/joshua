import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";
import { API_URL } from "../../config"
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {useMutation, useQuery} from "react-query";
// import Pagination from '../../components/Pagination';
import {useForm} from "react-hook-form";
const Products = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
    const [newProduct,setNewProduct] = useState([]);
    const handleCreateNewProduct = (datas) => {
        // event.preventDefault()
        const bodyData = {
            product : datas,
            customer : "admin@gmail.com"
        }
        console.log(datas)
        axios.post(`${API_URL}/admin/product/create`,bodyData).then((res)=>{
            console.log(res);
        })
    }
    
    // handle pagination button clicks
    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);
    const { isLoading, isError, data, error } = useQuery('myData', async () => {
        const response = await axios.get(`${API_URL}/allcustomer`);
        const data = await response;
        return data.data;
    });

    const submitOrderFilters = useMutation(async (formData) => {
        console.log(formData);
        const response = await axios.post(`${API_URL}/admin/getProducts`, formData);
        const products = await response;
        setProduct(products.data)
        return products.data;
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
                                <form className="row g-4" >
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
                                </form>
                                <div className="row">
                                   <div className="alert alert-info">
                                       Select the Store Name From Above and Click on the Create Button to Create the Artovision Product in selected store.
                                   </div>
                                </div>
                            </div>}
                            <table className="table  table-striped">
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
                                    {currentItems && currentItems?.map((product, index) => {
                                        const tagToCheck = "Artovision";
                                        const hasTag = product.tags.split(',').some(tag => tag.trim() === tagToCheck);
                                        if (!hasTag) {
                                            return (
                                                <tr>
                                                    <td>{product.title}</td>
                                                    <td>{product.status}</td>
                                                    <td>
                                                        <img src={product.images[0]?.src} className="img-thumbnail w-25" />
                                                    </td>
                                                    <td>{product.tags}</td>
                                                    {/*<td>{product.created_at}</td>*/}
                                                    <td><button className={"btn btn-info"} onClick={() => handleCreateNewProduct(product)}>Create</button></td>
                                                </tr>
                                            )
                                        }
                                    })}
                                </tbody>
                            </table>
                            <div className="flex justify-center mt-4">
                                {/* render the previous page button */}
                                {currentPage > 1 && (
                                    <button
                                        className="mx-1 px-4 py-2 rounded bg-white text-blue-500 hover:bg-gray-100"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    >
                                        &#x2190;
                                    </button>
                                )}

                                {/* render the current page number */}
                                <span className="mx-1 px-4 py-2 rounded text-primary">{currentPage}</span>

                                {/* render the next page button */}
                                {currentPage < Math.ceil(products.length / itemsPerPage) && (
                                    <button
                                        className="mx-1 px-4 py-2 rounded bg-white text-blue-500 hover:bg-gray-100"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >
                                        &#x2192;
                                    </button>
                                )}
                            </div>
                        </Container>

                    </>)
                }

            />
        </>
    );
};

export async function getServerSideProps({ query }) {
    const currentPage = parseInt(query.page) || 1;
    const limit = 12;
    const offset = (currentPage - 1) * limit;

    // Fetch products from API using limit and offset
    const response = await axios.get(`${API_URL}/admin/products/artovision`);
    //   console.log(response.data)    
    //   setProducts(response.data.products);
    //   setTotalPages(Math.ceil(response.data.products.length / limit));

    const numProducts = 10; // Replace with actual total number of products
    const numPages = Math.ceil(numProducts / limit);
    const products = response.data.products
    return {
        props: {
            products,
            currentPage,
            numPages,
        },
    };
}

export default Products;


