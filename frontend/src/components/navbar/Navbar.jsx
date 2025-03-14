import UserButton from "../userButton/UserButton"
import "./Navbar.css"

function Navbar(){
    return(
    <div className="navbar">
        <div className="left">
            <img className="navbar_logo" src="/asset/logo.png" alt=""/>
        </div>
        <div className="right">
            <div className="portfolio">porfolio</div>
            <div className="watchlist">watchlist</div>
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