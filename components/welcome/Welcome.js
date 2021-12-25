import react from "react";
import Link from "next/link";

export default function welcome() {
    return (
        <div className="container bg-danger" style={{}}>
            <div className="row">
                <div className="col">
                    <h1>Welcome to Dekho Krashak </h1>
                    <p>For the better </p>
                    <div className="row">
                        <div className="col">
                            <Link href="/welcome/login">
                                <a>Login</a>
                            </Link>

                        </div>
                        <div className="col">
                            <Link href="/welcome/registration">
                                <a>Registration</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}