import style1b from './Footer.module.css'
function Footer1({l1,l2,l3,l4,l5,l6,l7}) {
    return (
        <div>
            <div className={style1b.footer1}>
                <ul className={style1b.list1}>
                    <li className={style1b.tekiname1}>{l1}</li>
                    <li>{l2}</li>
                    <li>{l3}</li>
                    <li>{l4}</li>
                    <li>{l5}</li>
                    <li>{l6}</li>
                    <li>{l7}</li>
                </ul>
            </div>
        </div>
        
    )
}
export default Footer1;