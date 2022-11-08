import style1h from './Aboutfounder.module.css'

function Founderdetails({Name,post,Exp}) {
    return (
        <div>
            <p className={style1h.name}>{Name}</p>
            <p className={style1h.post}>{post}</p>
            <p className={style1h.exp}>{Exp}</p>
        </div>
    )
}
export default Founderdetails;