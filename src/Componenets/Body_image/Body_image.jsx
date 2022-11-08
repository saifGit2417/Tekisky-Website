import style1a from './Body_image.module.css'
const Bodyimage = () => {
    return <div className={style1a.body1a}>
        <div className={style1a.writtencontent}>
            <div className={style1a.tekiname}>
                <p className={style1a.ha}>Grow Your</p>
                <p className={style1a.hb}> <u>Buisness With</u> </p>
                <p className={style1a.hc}>Tekisky</p>
            </div>
            <div className={style1a.buttons}>
                <input type="button" value="Get Started" className={style1a.button1} />
                <input type="button" value="Our Services" className={style1a.button2} />
            </div>
        </div>
    </div>
}
export default Bodyimage;