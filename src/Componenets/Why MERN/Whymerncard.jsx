import style1e from './Whymern.module.css'

function Whymerncard({Title,Content,Readmore}) {
    return (
        <div>
            <div className={style1e.card}>
                <p className={style1e.headingofcard}>{Title}</p>
                <p className={style1e.deatilsofcard}>{Content}</p>
                <a href="" className={style1e.deatilsofcard}>{Readmore}</a>
            </div>
        </div>
    )
}

export default Whymerncard;