import img from '../assets/images/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function SidePage(){
    return <div id="sideBar">
        <img src={img} style={{width:"200px", height:"170px", borderRadius:"10px"}} alt=''></img>
        <h3>Mennatallah Ahmed</h3>
        <div className='sidebar-items'>
        <FontAwesomeIcon icon={faEnvelope} />
        <h5>mennatallahahmed892@gmail.com</h5>
        </div>

        <div className='sidebar-items'>
        <FontAwesomeIcon icon={faPhone} style={{ fontSize: "20px" }} />
        <h5>(+20)1011287860</h5>
        </div>

        <div className='sidebar-items'>
            <FontAwesomeIcon icon={faLocationDot}/>
            <h5>Cairo, Egypt</h5>
        </div>

        <div className='sidebar-items'>
        <FontAwesomeIcon icon={faGraduationCap}/>
        <h5>GPA: 3.28</h5>
        </div>

        <div className='sidebar-items'>
        <FontAwesomeIcon icon={faUniversity}/>
        <h5>Computers and Artificial Intelligence,<br/> Cairo University</h5>
        </div>

        <div id='links' style={{display:"flex", justifyContent:"center", gap:"15px"}}>
            <a className="linkedin" href="https://www.linkedin.com/in/mennatallah-ahmed-0b0a72277/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin}  />
            </a>

            <a className='github' href="https://github.com/mennatallah222" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub}  />
            </a>
        </div>
    </div>
}