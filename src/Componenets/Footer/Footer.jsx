import style1b from './Footer.module.css'
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import Footer3 from './Footer3';
const Footer = () => {
    return <div className={style1b.footermain}>
        <div className={style1b.footer}>
            <Footer1 l1="TEKISKY" l2="Placed Students" l3="Our success Stories" l4="Addmission Form" />
            <Footer2 l1="USEFUL LINKS" l2="Home" l3="About Us" l4="Services" l5="Terms Of Services" l6="Privacy Policy" l7="New Batches" />
            <Footer3 l1="CONTACT US" l2="Tekisky pvt. ltd. 2nd floor," l3="Opposite WaterTank, WorkShop" l4="Corner, Nanded-431605" l5="Phone: +91-8625817334" l6="Email: hr@tekisky.com" />
        </div >
        <p className={style1b.copyright}>© Copyright Tekisky pvt. ltd. All Rights Reserved</p>
        <div className={style1b.secondcolor}></div>
    </div>
}

export default Footer;