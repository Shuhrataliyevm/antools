import "./nation.css"

function Nation() {
    return (
        <section className="nike">
            <div className="nations">
                <div className="nation-image">
                    <img src="./assets/icons/Notion.svg" alt="#" />
                    <h4>Notion <br /><span>Free & Paid</span></h4>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                <div className="image">
                    <img src="./assets/icons/flat.svg" alt="#" />
                    <img src="./assets/icons/grey.svg" alt="#" />
                    <button>Visit</button>
                </div>
            </div>
        </section>
    )
}

export default Nation;