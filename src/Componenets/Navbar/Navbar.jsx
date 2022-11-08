import style from './Navbar.module.css'
const Navbar = ({ Home, About, Services, Tech, Contact, Batch }) => {
    return (
        <div className={style.navbar1}>
            <div className={style.logo}><p className={style.logo1}>TEKISKY</p></div>
            <div className={style.contentofnav}>
                <ul className={style.mainlist}>
                    <li className={style.sublist}>{Home}</li>
                    <li className={style.sublist}>{About}</li>
                    <li className={style.sublist}>{Services}</li>
                    <li className={style.sublist}>{Tech}</li>
                    <li className={style.sublist}>{Contact} </li>
                    <li className={style.sublist}>{Batch}</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;