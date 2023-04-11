import Head from "next/head";
import Link from "next/link"
const LoginLayout = ({header,content}) => {
    return (
        <>
        <Head>
            <title>Artovision | {header}</title>
        </Head>
            <div className="contianer-fluid vh-100">
                <nav className="navbar navbar-expand-lg bg-secondary mb-5">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">Artovision</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" href={"/register"}>Register</Link>
                                <Link className="nav-link" href={"/"}>Login</Link>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginLayout;