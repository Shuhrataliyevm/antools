import "./header.css"
function Header() {
    return(
        <header>
            <img src="./assets/images/antools.png" alt="#" />
            <nav>
                <a href="#">Home</a>
                <a href="#">Categories</a>
                <a href="#">My Collections</a>
                <a href="#">Blog</a>
            </nav>
            <div>
            <button className="login">Login</button>
            <button className="sign-up">Sign up</button>
            </div>
        </header>
    )
}

export default Header;