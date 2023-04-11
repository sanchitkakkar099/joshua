import { useRouter } from "next/router";
import { useEffect } from "react";
const Callback = () => {
    const Router = useRouter()
    useEffect(()=>{
        Router.push('/')
    })
    return (
        <>
            Hello
        </>
    )
}

export default Callback;