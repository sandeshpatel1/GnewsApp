import React from "react"; 

const Navbar = ()=>{

    return (
        <div className="Navbar">
        <div class="nav">
           <a className="logo" href="/">NEWS ADDA</a>
            <div className="nav-items">
                <div className="search">
                    <input type="search" class="search-box" placeholder="search news here"/>
                    <button class="search-btn">Search</button>
                </div>
        </div>
        <ul class="links-cointainer">
        <li className="nav-item"><a className="nav-link " aria-current="page" href="/">Home</a></li>
        <li className="nav-item"><a className="nav-link" href="/business"> Business</a></li>
        <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment </a></li>
        <li className="nav-item"><a className="nav-link" href="/health">Health </a></li>
        <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>
        <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
        <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>
        </ul>
        </div>
    </div>
        )
}


export default Navbar