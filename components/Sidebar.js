import Link from "next/link";

const Sidebar = () => {
    return (
        <>
            <div className="col-xl-2 col-lg-3  col-md-4 bg-dark">
                <div className="row p-md-4">
                    <div className="col-md-12 border-bottom">
                        <Link href='/' className={"text-decoration-none cursor pe-auto"}><p className="text-center fs-5 text-light">Welcome to Artovision</p></Link>
                    </div>
                    <div className="col-md-12  mt-5">
                        <Link href={'/dashboard'} className={"text-decoration-none pe-auto"}>
                        <p className=" fs-5 text-light">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box2 me-3 mb-1" viewBox="0 0 16 16">
                                        <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
                                    </svg>
                                </span>
                            DashBoard</p>
                        </Link>
                    </div>
                    {/* <div className="col-md-12  ">
                        <Link href={'/dashboard/customers'} className={"text-decoration-none pe-auto"}>
                        <p className=" fs-5 text-light" >
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box2 me-3 mb-1" viewBox="0 0 16 16">
                                        <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
                                    </svg>
                                </span>
                        Stores
                        </p>
                        </Link>
                    </div> */}
                    <div className="col-md-12  ">
                        <Link href={'/dashboard/orders'} className={"text-decoration-none pe-auto"}>
                        <p className=" fs-5 text-light" >
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box2 me-3 mb-1" viewBox="0 0 16 16">
                                        <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
                                    </svg>
                                </span>
                            Order List</p>
                        </Link>
                    </div>
                    <div className="col-md-12  ">
                        <Link href={'/dashboard/products'} className={"text-decoration-none pe-auto"}>
                        <p className=" fs-5 text-light">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box2 me-3 mb-1" viewBox="0 0 16 16">
                                        <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
                                    </svg>
                                </span>
                            Product List</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar