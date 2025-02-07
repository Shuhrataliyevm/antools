import "./awesome.css"
function Awesome (){
    return(
        <section>
            <div className="tools">
                <div className="tool">
                    <div className="texts">
            <h1>Awesome tools for <br />Designer & Developer.</h1>
            <p>Antool is a web collection of information on paid or <br /> free Design and Development tools</p>
            <input type="text" placeholder="find more than 430+ tools..." />
            <button>Search</button>
            <div className="pictures">
                <img src="./assets/images/facebook.png" alt="#" />
                <img src="./assets/images/instagram.png" alt="#" />
                <img src="./assets/images/twitter.png" alt="#" />
            </div>
                    </div>
        </div>
        <div className="big-picture">
            <img src="./assets/images/big-picture.png" alt="#" />
        </div>
    </div>
        </section>
    )
}

export default Awesome;