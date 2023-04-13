import React, {useState} from 'react'
import './LoginForm.css';

function LoginForm() {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    function handleSubmit(event){
        event.preventDefault();

    }


    return (
        <>
            <div className="sidenav">
                <div className="login-main-text">
                    <h2>Outcome Based Education<br/></h2>
                    <p>Empowering students for success through measurable outcomes.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="XYZ@gmail.com" onChange={e => setEmail(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-success mx-2">Login</button>
                            <button type="submit" className="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm