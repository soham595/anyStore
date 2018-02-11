import React from 'react';
import {Link} from 'react-router-dom';
import './signUp.css';

class SignUpPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <div className="container">
                <form className="form-space" method="post">
                    <h1>Login to your account</h1>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label className="form-control-lg">Username:</label>
                                <input value={this.state.username} onChange={this.onChange} type="text"
                                       className="form-control" placeholder="Username" name="username"
                                       required/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <label className="form-control-lg">Password:</label>
                                <input value={this.state.password} onChange={this.onChange} type="text"
                                       className="form-control" placeholder="Password" name="password"
                                       required/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <div className="form-group">
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

        );
    }
}

export default SignUpPage;