import UserButton from "../userButton/UserButton"
import "./Navbar.css"

function Navbar(){
    return(
    <div className="navbar">
        <div className="left">
            <img className="navbar_logo" src="/asset/logo1.png" alt=""/>
            <h1>CryptoShield</h1>

        </div>
        <div className="right">
            <div className="portfolio">Porfolio</div>
            <div className="watchlist">Watchlist</div>
            <div className="inputField">
                <img className="navbar_logo" src="/asset/glass.png" alt=""/>
                <input placeholder="search" />
            </div>
            <UserButton/>
        </div>
    </div>
    )
}

export default Navbar