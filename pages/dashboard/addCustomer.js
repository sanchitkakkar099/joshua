import DashboardLayout from "../../components/DashboardLayout";
import {useMutation} from "react-query";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useRouter} from "next/router";
import {useState} from "react";
import {API_URL} from "../../config"

const AddCustomer = () => {
    const Router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [errorMessage, setErrorMessage] = useState(null);
    const loginMutation = useMutation(async (formData) => {
        console.log(formData);
        // call your login API here
        const response = await axios.post(`${API_URL}/createCustomer`, {
            email: formData.email,
            name: formData.name,
            store_url: formData.store_url,
            access_token: formData.access_token,
            api_key: formData.api_key,
            api_secret: formData.api_secret,
            api_version: formData.api_version
        });
        console.log(response)
        return response;
    });
    const onSubmit = async (data) => {
        try {

            await loginMutation.mutateAsync(data);
            // redirect to dashboard page if login success
            Router.push('/dashboard/customers');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };
    return (
        <>
        <DashboardLayout content={(
            <>
                <div className={"row justify-content-center p-5"}>
                    <div className={"col-md-8"}>
                        <h2>Add a New Customer to our Dashboard</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Customer Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" {...register("name")} aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Customer Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" {...register("email")} aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Store Url</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" {...register("store_url")} aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Access Token</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" {...register("access_token")} aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Api Key</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" {...register("api_key")} aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Api Secret</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" {...register("api_secret")} aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Api Version</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" value={"2023-01"} {...register("api_version")} aria-describedby="emailHelp" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </>
        )} />
        </>
    )
}

export default AddCustomer;