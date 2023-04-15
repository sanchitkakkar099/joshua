import DashboardLayout from "../../components/DashboardLayout";
import axios from "axios";
import { API_URL } from "../../config"
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useMutation, useQuery } from "react-query";
// // import Pagination from '../../components/Pagination';
import { useForm } from "react-hook-form";
import { getCookie } from "cookies-next";
// const Products = ({ products }) => {
// const [currentPage, setCurrentPage] = useState(1);
// const itemsPerPage = 5;
// const indexOfLastItem = currentPage * itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
// const [newProduct, setNewProduct] = useState([]);

//     // handle pagination button clicks
//     const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

//     const { register, handleSubmit, watch, formState: { errors } } = useForm();
//     const [errorMessage, setErrorMessage] = useState(null);
//     const { isLoading, isError, data, error } = useQuery('myData', async () => {
//         const response = await axios.get(`${API_URL}/allcustomer`);
//         const data = await response;
//         return data.data;
//     });

//     const submitOrderFilters = useMutation(async (formData) => {
//         console.log(formData);
//         const response = await axios.post(`${API_URL}/admin/getProducts`, formData);
//         const products = await response;
//         setNewProduct(products.data)
//         return products.data;
//     });
//     const onSubmit = async (data) => {
//         try {
//             await submitOrderFilters.mutateAsync(data);
//         } catch (error) {
//             setErrorMessage(error.message);
//         }
//     };
//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (isError) {
//         return <div>Error: {error.message}</div>;
//     }
//     return (
//         <>
//     );
// };



// export default Products;

const Products = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [newProduct, setNewProduct] = useState([]);
    const [successAlert, setsuccessAlert] = useState('')
    useEffect(() => {
        // const currentPage = currentPage;
        const limit = 12;
        const offset = (currentPage - 1) * limit;
        axios.get(`http://localhost:4001/products/artovision`)
            .then((res) => {
                const numProducts = 10; // Replace with actual total number of products
                const numPages = Math.ceil(numProducts / limit);
                const products = res.data
                setNewProduct(products)
            })
    }, []);
    // console.log(newProduct);
    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = newProduct?.slice(indexOfFirstItem, indexOfLastItem);

    console.log(currentItems)


    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
    // Create New Product to the Customer Store
    const handleCreateNewProduct = (datas) => {
        // event.preventDefault()
        const bodyData = {
            product: datas,
            access_token: getCookie('xavascrtcode')
        }
        console.log(bodyData)
        axios.post(`${API_URL}/admin/product/create`, bodyData).then((res) => {
            setsuccessAlert(res)
            console.log(res);
        }).catch((err) => {
            console.log(err)
            setsuccessAlert(err)
        })
    }
    // console.log(currentItems)

    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const [errorMessage, setErrorMessage] = useState(null);
    // const { isLoading, isError, data, error } = useQuery('myData', async () => {
    //     const response = await axios.get(`${API_URL}/allcustomer`);
    //     const data = await response;
    //     return data.data;
    // });
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
                                {currentPage < Math.ceil(newProduct.length / itemsPerPage) && (
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
    )
}

export default Products;
