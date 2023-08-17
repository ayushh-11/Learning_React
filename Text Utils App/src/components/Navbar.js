import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className={props.style}>
                <div className="container">
                    <li className="navbar-brand" href="/">{props.title}</li>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About us</Link>
                            <button className="btn btn-primary" onClick={props.toggleMode}>Enable {props.modeText} mode</button>
                        </div>
                    </div>
                </div>
            </nav>
    )
}