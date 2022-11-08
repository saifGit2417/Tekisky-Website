import Admissionleft from './Admissionleftpart';
import style1c from './Newadmission.module.css'
const Newadmission1 = () => {
    return (
        <div className={style1c.maindiv}>
            <p className={style1c.anouncement}>We are starting a New MERN and JAVA Full stack batch on 15 June <br /> 2022</p>
            <a href="" className={style1c.register}>Register Now</a>
            <div className={style1c.partitiondiv}>
                <div className={style1c.partitiondiv1}>
                    <Admissionleft Heading="MongoDB" Content="It combines the power of the cloud with a document database that puts developers in control." />
                    <Admissionleft Heading="Express" Content="Express is a minimal and flexible Node.js web application framework that provides a robust " />
                    <Admissionleft Heading="React" Content="React makes it painless to create interactive UIs. Design simple views for each state in " />
                    <Admissionleft Heading="Node" Content="It is used for server-side programming, and primarily deployed for non-blocking, event-driven" />
                </div>
                <div className={style1c.partitiondiv2}>
                    <img src="http://www.tekisky.com/assets/img/mern-stack.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Newadmission1;