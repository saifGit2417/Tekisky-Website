import style1f from './Contactus.module.css'


const Contactus = () => {
    return (
        <div className={style1f.maincontainer1}>
            <p className={style1f.contactus}>Contact Us</p>
            <div className={style1f.maincontainerofcontact}>
                <div className={style1f.iframe}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3526950788673!2d77.30308021482357!3d19.17979168702844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7502795a5c1%3A0x15ded39c097470bd!2sTekisky%20pvt.%20ltd.!5e0!3m2!1sen!2sin!4v1666080183702!5m2!1sen!2sin" width="600" height="450" style={{ marginRight: + 'em' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={style1f.form}>
                    <p className={style1f.formhead}>TEKISKY</p>
                    <form action="" className={style1f.formstart}>
                        <input type="text" name="" id="" placeholder='Your Name' className={style1f.input1} />
                        <input type="email" name="" id="" placeholder='Your E-mail' className={style1f.input2} />
                        <br />
                        <input type="text" placeholder='Subject' className={style1f.subject} />
                        <br />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Message' className={style1f.message} ></textarea>
                        <br />
                        <input type="button" value="Send Message" className={style1f.button} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactus;