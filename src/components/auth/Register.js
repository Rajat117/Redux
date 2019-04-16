import React, { Component } from "react";

export class Register extends Component {
    render() {
        return (
            <div>
                <div class="container d-flex justify-content-center  align-self-center ">
                    <div class="card" style={{ width: "25rem" }}>
                        <div class="card-title pt-4 text-center">
                            Complete Your Profile
                        </div>
                        <form class="p-4" action="/register" method="POST">
                            <div class="form-group mb-4">
                                <input
                                    type="email"
                                    class="form-control"
                                    name="email"
                                    id="Name"
                                    value="none@emample.com"
                                />
                                <a href="/login" class="text-primary">
                                    Change Your Email Id
                                </a>
                                <small
                                    id="emailHelp"
                                    class="form-text  text-danger"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    name="username"
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="FullName"
                                />
                                <small
                                    id="emailHelp"
                                    class="form-text  text-danger"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    name="pwd1"
                                    type="password"
                                    class="form-control"
                                    id="pwd1"
                                    placeholder="Password"
                                />
                                <small
                                    id="emailHelp"
                                    class="form-text  text-danger"
                                />
                            </div>
                            <div class="form-group">
                                <input
                                    name="pwd2"
                                    type="password"
                                    class="form-control"
                                    id="pwd2"
                                    placeholder="Confirm Password"
                                />
                                <small
                                    id="emailHelp"
                                    class="form-text  text-danger"
                                />
                                <small
                                    id="emailHelp"
                                    class="form-text  text-danger"
                                />
                            </div>
                            <div class="form-group mb-4">
                                <input
                                    name="phone"
                                    type="Number"
                                    class="form-control"
                                    id="phone"
                                    placeholder="+91"
                                />
                                <small
                                    id="emailHelp"
                                    class="form-text  text-danger"
                                />
                            </div>
                            <div class="form-check mb-4">
                                <input
                                    name="checkbox1"
                                    class="form-check-input "
                                    type="checkbox"
                                    value="check"
                                    id="defaultCheck1"
                                />
                                <label
                                    class="form-check-label"
                                    for="defaultCheck1"
                                >
                                    I am at least 16 years old and agree with
                                    the Terms & Conditions and Privacy Policy of
                                    Times of India
                                </label>
                                <small
                                    id="emailHelp"
                                    class="form-text  text-danger"
                                />
                            </div>
                            <div class="form-check mb-4">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="check"
                                    name="p2"
                                    id="defaultCheck2"
                                />
                                <label
                                    class="form-check-label"
                                    for="defaultCheck1"
                                >
                                    Send me offers and promotions
                                </label>
                            </div>
                            <div class="form-check mb-4">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    value="check"
                                    name="p3"
                                    id="defaultCheck3"
                                />
                                <label
                                    class="form-check-label"
                                    for="defaultCheck1"
                                >
                                    Send me offers and promotions
                                </label>
                            </div>

                            <input
                                type="submit"
                                class="btn btn-block btn-lg btn-danger "
                            />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;
