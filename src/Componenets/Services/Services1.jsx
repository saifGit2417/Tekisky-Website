import Servicecard from './Servicecard';
import style1d from './Services.module.css'

const Services1 = () => {
    return (
        <div className={style1d.maindiv1}>
            <div className={style1d.services}>
                <p className={style1d.servicesname}>Services</p>
            </div>
            <div className={style1d.parts}>
                <Servicecard Title="Training" Content="We provide Quality Training" />
                <Servicecard Title="Website Development" Content="Develop Website for your Business" />
            </div>
            <div className={style1d.parts}>
                <Servicecard Title="Business Digitalization" Content="Digitalize Your business With Us" /> 
                <Servicecard Title="IT Consulting" Content="We Will Assist You For a job" />
            </div>


        </div>
    )
}

export default Services1;