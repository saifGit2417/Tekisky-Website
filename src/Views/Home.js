import Aboutfounder from "../Componenets/About founders/Aboutfounder.jsx";
import Bodyimage from "../Componenets/Body_image/Body_image.jsx";
import Contactus from "../Componenets/Contact Us/Contactus.jsx";
import Footer from "../Componenets/Footer/Footer.jsx";
import Navbar from "../Componenets/Navbar/Navbar.jsx";
import Newadmission1 from "../Componenets/New admission anouncement/Newadmission1.jsx";
import Services1 from "../Componenets/Services/Services1.jsx";
import Whymern1 from "../Componenets/Why MERN/Whymern1.jsx";


const Home = () => {
    return (
        <div>
            <Navbar Home="Home" About="About Us" Services="Services" Tech="Technologies" Contact="Contact us" Batch="New Batches" />
            <Bodyimage/>
            <Newadmission1/>
            <Services1/>
            <Whymern1/>
            <Aboutfounder/>
            <Contactus />
            <Footer />
        </div>
    )
}
export default Home;