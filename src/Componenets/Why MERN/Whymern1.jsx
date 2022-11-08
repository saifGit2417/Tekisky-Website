import style1e from './Whymern.module.css'
import Whymerncard from './Whymerncard';
const Whymern1 = () => {
    return (
        <div className={style1e.maindiv2}>
            <p className={style1e.heading1}>Why choose MERN?</p>
            <div className={style1e.containerdiv}>
               <Whymerncard Title="Build web apps using React and Node." Content="React is used for developing user interfaces. js to compile and optimize the JavaScript code and easy to create UI Test cases. Node. js handles requests and authentication from the browser, make database calls." Readmore="Read More"/>
               <Whymerncard Title="Work with data using MongoDB and Express." Content="Adding the capability to connect databases to Express apps is just a matter of loading an appropriate Node.js driver for the database in your app." Readmore="Read More"/>
               <Whymerncard Title="Test, secure, and deploy your apps." Content="Convert your source to the proper format to deploy to production. Explain the commands used to deploy changes to your org. Describe how to speed up deployments with Quick Deploy" Readmore="Read More"/>
            </div>
        </div>
    )
}

export default Whymern1;