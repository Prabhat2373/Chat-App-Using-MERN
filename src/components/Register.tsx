import React from "react";
interface FormDataType {
    username: string;
    email: string;
    password: string;
}
const Register = () => {
    const [responseBody, setResponseBody] = React.useState<FormDataType | Object>({});
    const inputChangeHandler = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | any>
    ) => {
        const { name, value } = event.target;
        setResponseBody({ ...responseBody, [name]: value });
    };
    const HandleSignUp = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent) => {
        event?.preventDefault();
        console.log(responseBody)
    }
    const HandleLogin = (event: React.MouseEvent) => {
        event?.preventDefault();
        console.log(responseBody)
    }
    return (
        <>
            <div className="flex justify-center">
                <div className="register-page">
                    <input
                        className="log-input"
                        type="checkbox"
                        id="chk"
                        aria-hidden="true"
                    />

                    <div className="signup">
                        <form>
                            <label className="inp-label" htmlFor="chk" aria-hidden="true">
                                Sign up
                            </label>
                            <input
                                className="log-input"
                                type="text"
                                name="username"
                                placeholder="User name"
                                onChange={(e) => inputChangeHandler(e)}
                                required
                            />
                            <input
                                className="log-input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => inputChangeHandler(e)}

                                required
                            />
                            <input
                                className="log-input"
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => inputChangeHandler(e)}
                                required
                            />
                            <button className="log-button" onClick={(e) => {
                                HandleSignUp(e)
                            }}>Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form>
                            <label className="inp-label" htmlFor="chk" aria-hidden="true">
                                Login
                            </label>
                            <input
                                className="log-input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => inputChangeHandler(e)}

                                required
                            />
                            <input
                                className="log-input"
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={(e) => inputChangeHandler(e)}

                                required
                            />
                            <button className="log-button" onClick={(e) => HandleLogin(e)}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
