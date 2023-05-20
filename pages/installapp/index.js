import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { API_URL } from "../../config"
import { useShopStore } from "../../public/store/shopStore";
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';

import axios from "axios";
import Head from "next/head";


const InstallApp = () => {
  
  // const shop = useShopStore((state) => state.shop)
  // const setShop = useShopStore((state) => state.setShop)
  const [shopName, setShopName] = useState("");
  const Router = useRouter()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const loginMutation = useMutation((formData) => {
    // console.log(formData)
    var formdata = new FormData();
    formdata.append("shop_name", `${formData.shopName}`);
    
    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    fetch("http://127.0.0.1:8000/api/shopify/installapp", requestOptions)
      .then(response => response.json())
      .then(result => 
        window.location.href = result.redirect_url
        )
      .catch(error => console.log('error', error));
  });
  const onSubmit = async (data) => {
    try {
      await loginMutation.mutateAsync(data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Artovision | InstallApp</title>
      </Head>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-center mb-4">Login</h2>
          <Form.Group controlId="shopName">
            <Form.Label>Shop Name</Form.Label>
            <Form.Control
              type="text"
              {...register("shopName")}
              placeholder="e.g. my-shop.myshopify.com"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100 mt-3">
            Login
          </Button>
        </Form>
      </div>
    </>
  )
}

export default InstallApp;