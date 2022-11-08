import style1c from './Newadmission.module.css'
function Admissionleft({Heading,Content}) {
    return (
        <div>
            <div className={style1c.mongodb}>
                <div className={style1c.circle}></div>
                <div className={style1c.writtencontent}>
                    <h3>{Heading}</h3>
                    <p>{Content}</p>
                </div>
            </div>
        </div>
    )
}
export default Admissionleft;