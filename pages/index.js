import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import LoginLayout from "../components/LoginLayout";
import {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import axios from "axios";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ['latin'] })
import { setCookie } from 'cookies-next'
import {useUserStore} from "../public/store/userStore";
import {API_URL} from "../config"

export default function Home() {
  const user = useUserStore((state) => state.user);
  // console.log(user)
  const setUser = useUserStore((state) => state.setUser);
  const Router = useRouter();
  useEffect(()=>{
    if(user){
      Router.push('/dashboard')
    }
  })
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState(null);
  const loginMutation = useMutation(async (formData) => {
    console.log(formData);
    // call your login API here
    console.log(API_URL)
    const response = await axios.post(`${API_URL}/user/login`, {
      email: formData.email, password: formData.password
    });

    const data = await response;
    setCookie('access_token', data.data.jwt, { path: '/' })
    setUser(data)
    return data;
  });
  const onSubmit = async (data) => {
    try {

      await loginMutation.mutateAsync(data);
      // redirect to dashboard page if login success
      Router.push('/dashboard');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <LoginLayout header={'Login'} content={(
          <>
            <main className={"d-flex justify-content-center p-5 vh-100"}>
              {/*<div className={styles.center}>*/}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" {...register("email")} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" {...register("password")} id="exampleInputPassword1" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              {/*</div>*/}
            </main>
          </>
      )} />
    </>
  )
}
