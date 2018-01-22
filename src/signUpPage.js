import React from 'react';
import {Link} from 'react-router-dom';
import './signUp.css';

class SignUpPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <form className="form-space" method="post">
                            <div className="row">
                                <div className="col-md-3 padtop5">
                                    <label className="form-control-label">Customer ID:</label>
                                </div>
                                <div className="col-md-2">
                                    <input type="text" className="form-control" id="c_id" placeholder="ID" name="cid"
                                           required/>
                                </div>
                            </div>
                            <div className="row padtop15">
                                <div className="col-md-3 padtop5">
                                    <label className="form-control-label">Customer Name:</label>
                                </div>
                                <div className="form-group col-md-4">
                                    <input type="text" name="fname" className="form-control" id="firstName"
                                           placeholder="First Name" value="" required/>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" name="lname" className="form-control" id="lastName"
                                           placeholder="Last Name" required/>
                                </div>
                            </div>
                            <div className="row padtop5">
                                <div className="col-md-3 padtop5">
                                    <label className="form-control-label">Address:</label>
                                </div>
                                <div className="form-group col-md-8">
                                    <input type="text" className="form-control" id="address" placeholder="Address"
                                           name="address"/>
                                </div>
                            </div>
                            <div className="row padtop5">
                                <div className="col-md-3">
                                    <label className="form-control-label padtop5">Phone Number:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" name="pno" className="form-control" id="phn_no"
                                           placeholder="Contact Number" required/>
                                </div>
                            </div>
                            <div className="row padtop15">
                                <div className="col-md-3">
                                    <label className="form-control-label padtop5">Email:</label>
                                </div>
                                <div className="col-md-4">
                                    <input type="text" name="email" className="form-control" id="email"
                                           placeholder="Email"/>
                                </div>
                            </div>
                            <div className="row" id="buttoncustom">
                                <div className="col-md-3"></div>
                                <div className="col-md-2 padtop15">
                                    <button type="submit" className="btn btn-default">
                                        <Link to="/signup">Cancel</Link>
                                    </button>
                                </div>
                                <div className="col-md-2 padtop15">
                                    <button type="submit" className="btn btn-primary"/>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        );
    }
}

export default SignUpPage;