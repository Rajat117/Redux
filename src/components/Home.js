import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { loginUser } from "../actions/index";
export class Home extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.store.loginReducer);
    }
    render() {
        console.log(this.props.store.loginReducer);
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>Welcome</h1>
                    <a href="/login">
                        <button
                            type="button"
                            className="btn btn-block btn-danger"
                        >
                            Login
                        </button>
                    </a>
                    <br />
                    <a href="/register">
                        <button
                            type="button"
                            className="btn btn-block btn-info"
                        >
                            Sign Up
                        </button>
                    </a>
                </div>
            </div>
        );
    }
}

// Home.propTypes = {
//     loginUser: PropTypes.func.isRequired
// };
function mapStateToProps(state) {
    return {
        store: state
    };
}
export default connect(mapStateToProps)(Home);
