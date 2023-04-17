import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { setCookie } from "cookies-next";
const Callback = () => {
    const Router = useRouter()
    const queryPrams = Router.query;
    // console.log(queryPrams)
    // console.log(access_token);
    useEffect(() => {
        axios.post(`${API_URL}/shopify/callback?code=${queryPrams.code}&hmac=${queryPrams.hmac}&host=${queryPrams.host}
        &shop=${queryPrams.shop}&state=${queryPrams.state}&timestamp=${queryPrams.timestamp}`)
            .then((res) => {
                if (res.data.access_token != null) {
                    setCookie('xavascrtcode', res.data.access_token, { path: '/', maxAge: 60 * 6 * 24 })
                    console.log(res);
                    Router.push('/')
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