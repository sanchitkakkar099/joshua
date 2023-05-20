import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import {useUserStore} from "../../public/store/userStore";
import { setCookie } from "cookies-next";
const Callback = () => {
    const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);
    const Router = useRouter()
    const queryPrams = Router.query;
    console.log(queryPrams)
    useEffect(() => {
        axios.post(`http://127.0.0.1:8000/api/shopify/callback?code=${queryPrams.code}&hmac=${queryPrams.hmac}&host=${queryPrams.host}&shop=${queryPrams.shop}&timestamp=${queryPrams.timestamp}`)
            .then((res) => {
                console.log(res)
                if (res.data.status != null) {
                    setCookie('xavascrtcode', res.data.message.email, { path: '/', maxAge: 60 * 6 * 24 })
                    // console.log(res);
                    setUser(res.data.message)
                    Router.push('/dashboard')
                }
            }).catch((err) => {
                console.log(err.message);
            })
    })
    return (
        <>
            Hello
        </>
    )
}

export default Callback;