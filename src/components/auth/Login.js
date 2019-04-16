import React, { Component } from "react";
import { fetchUserCredentials } from "../../actions/index";
import { connect } from "react-redux";

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        console.log(this.props);
        const data = { email: this.state.email, password: this.state.password };
        this.props.dispatch(fetchUserCredentials(data));
    };
    render() {
        console.log(this.props.store.loginReducer);
        return (
            <div>
                <div className="container d-flex justify-content-center  align-self-center ">
                    <div className="card" style={{ width: "25rem" }}>
                        <div className="card-body text-center">
                            <h5 className="card-title pb-2 ">LOGIN</h5>

                            <a href="/auth/google">
                                <button
                                    className="btn-ggl btn-lg btn-block  mb-4"
                                    type="submit"
                                >
                                    <i className="fab fa-google mr-2" /> Sign in
                                    with Google
                                </button>
                            </a>
                            <a href="/auth/facebook">
                                <button
                                    className="btn-lg  btn-block btn-fb mb-4"
                                    type="submit"
                                >
                                    <i className="fab fa-facebook-f mr-2" />{" "}
                                    Sign in with Facebook
                                </button>
                            </a>

                            <h5 className="card-title pb-2 mb-4">
                                LOGIN WITH EMAIL
                            </h5>

                            <form onSubmit={this.handleSubmit}>
                                <div className=" form-group ">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        required
                                        value={this.state.email}
                                        onChange={ev =>
                                            this.setState({
                                                email: ev.target.value
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        id="exampleInputpwd"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter Password"
                                        value={this.state.password}
                                        onChange={ev =>
                                            this.setState({
                                                password: ev.target.value
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        value="Continue"
                                        className="btn btn-block btn-lg btn-primary "
                                    />
                                </div>
                            </form>
                            <a href="/forgot" className="text-secondary">
                                Forgot Password
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        store: state
    };
}

export default connect(mapStateToProps)(Login);
