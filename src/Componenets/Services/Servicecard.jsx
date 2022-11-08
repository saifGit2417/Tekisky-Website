import style1d from './Services.module.css'
function Servicecard({ Title, Content }) {
    return (
        <div>
            <div className={style1d.portion}>
                <h4>{Title}</h4>
                <p>{Content}</p>
            </div>
        </div>
    )
}

export default Servicecard;