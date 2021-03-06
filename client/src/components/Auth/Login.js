import React, {Component} from 'react';

class Login extends Component{
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

    }

    onChangeHandler = (e) =>{
        this.setState({[e.target.name]: [e.target.value]})
    };

    onSubmitHandler = (e) =>{
        e.preventDefault();

        const newUser = {
            email: this.state.email,
            password: this.state.password
        };

        console.log(newUser);
    };

    render(){
        return(
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your DevConnector account</p>
                            <form onSubmit={this.onSubmitHandler}>
                                <div className="form-group">
                                    <input value={this.state.email} onChange={this.onChangeHandler} type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" />
                                </div>
                                <div className="form-group">
                                    <input value={this.state.password} onChange={this.onChangeHandler} type="password" className="form-control form-control-lg" placeholder="Password" name="password" />
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;