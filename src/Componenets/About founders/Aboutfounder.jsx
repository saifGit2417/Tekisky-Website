import style1h from './Aboutfounder.module.css'
import Founderdetails from './Founderdetails';

function Aboutfounder() {
    
  return (
    <div className={style1h.container}>
        <div className={style1h.director}>
            <Founderdetails Name="SJ Khan" post="Director" Exp="11 Year of IT experience"/>
            <Founderdetails Name="W Mohammed Zubair" post="Director" Exp="17 Year of IT experience"/>
            <Founderdetails Name="Mohammed Umair" post="Director" Exp="4 Year of IT experience"/>
        </div>

    </div>
    
  )
}

export default Aboutfounder;