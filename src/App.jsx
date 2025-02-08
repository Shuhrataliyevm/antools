import React from "react";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Awesome from "./components/Awesome/awesome";
import Most from "./components/Most/most";
import Nation from "./components/Nation/nation";
import Lood from "./components/Lood/lood";
import Newcomer from "./components/Newcomer/newcomer";
import Upg from "./components/Upg/upg";
import Humankind from "./components/Humankind/humankind";
import Contributor from "./components/Contributor/contributor";
import nationData from "./components/Data/nationData";
import upgData from "./components/Data/upgData";


import "./App.css";

function App() {
    return (
        <main>
            <Header />
            <Awesome />
            <Most />

            <div className="nation-container">
                {nationData.map((item, index) => (
                    <Nation
                        key={index}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        icons={item.icons}
                        buttonText={item.buttonText}
                    />
                ))}
            </div>

            <Lood />
            <Newcomer />

            <div className="upg-container">
                {upgData.map((item, index) => (
                    <Upg
                        key={index}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        subtitle={item.subtitle}
                        description={item.description}
                        icons={item.icons}
                        buttonText={item.buttonText}
                    />
                ))}
            </div>

            <Humankind />
            <Contributor />
            <Footer />
        </main>
    );
}

export default App;


