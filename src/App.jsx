import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Awesome from "./components/Awesome/awesome";
import Most from "./components/Most/most";
import Nation from "./components/Nation/nation";
import Lood from "./components/Lood/lood";
import Newcomer from "./components/Newcomer/newcomer";
import Upg from "./components/Upg/upg";
import Humankind from "./components/Humankind/humankind";
import Contributor from "./components/Contributor/contributor"

import "./App.css";

function App() {
    return (
        <main>
            <Header />
            <Awesome />
            <Most />
            <div className="nation-container">
                <Nation />
                <Nation />
                <Nation />
                <Nation />
                <Nation />
                <Nation />
            </div>
            <Lood />
            <Newcomer />
            <div className="upg-container">
                <Upg />
                <Upg />
                <Upg />
                <Upg />
            </div>
            < Humankind />
            < Contributor />
            <Footer />
        </main>
    );
}

export default App;
