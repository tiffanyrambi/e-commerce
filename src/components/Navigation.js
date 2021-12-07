import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return(
        <nav className="navbar navbar-expand-lg my-4 shadow rounded-3">
            <div className="dropdown ">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <strong>ALL TYPES</strong>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item" to="#">Leather</Link></li>
                    <li><Link className="dropdown-item" to="#">Cutton</Link></li>
                    <li><Link className="dropdown-item" to="#">Wool</Link></li>
                </ul>
            </div>

            <div className="container ">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/"><strong>Popular Products</strong></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/lowPrice"><strong>Low Price</strong></Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/highPrice"><strong>High Price</strong></Link></li>
                    </ul>
                    
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>PRICE</strong>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item" to="#">Rp1.000  - Rp4.000</Link></li>
                            <li><Link className="dropdown-item" to="#">Rp5.000 - Rp8.000</Link></li>
                            <li><Link className="dropdown-item" to="#">Rp9.000 - Rp12.000</Link></li>
                            <li><Link className="dropdown-item" to="#">Rp13.000 - Rp16.000</Link></li>
                            <li><Link className="dropdown-item" to="#">Rp17.000 - Rp20.000</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navigation;