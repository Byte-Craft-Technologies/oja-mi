import './App.css';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Presentation from "./components/presentation";
import Video from "./components/video";
import OurProducts from "./components/our-products";
import Feedbacks from "./components/feedbacks";
import FAQ from "./components/faq";
import Statistics from "./components/statistics";
import Footer from "./components/footer";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <Presentation/>
            <Video/>
            <OurProducts/>
            <Feedbacks/>
            <FAQ/>
            <Statistics/>
            <Footer/>
        </div>
    );
}

export default App;
