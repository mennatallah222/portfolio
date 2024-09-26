import img from '../assets/images/icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faGraduationCap, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {Avatar, Box, Link, Stack, Typography} from '@mui/material';

export default function SidePage(){
    return <Box id="sideBar" sx={{mt: "4rem", ml:"10px"}}>
        <Avatar src={img} sx={{justifySelf:"center", width:"200px", height:"170px", borderRadius:"10px"}} alt=''></Avatar>
        <Box sx={{height:"90%", display:"flex", justifyContent:'space-between', flexDirection:"column", gap:1.5}} className="sidePage-second-section">
            <Typography variant="h5" sx={{textAlign:"center"}}>Mennatallah Ahmed</Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
                <FontAwesomeIcon icon={faEnvelope} />
                <Typography variant='h8'>mennatallahahmed892@gmail.com</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
            <FontAwesomeIcon icon={faPhone} style={{ fontSize: "20px" }} />
            <Typography variant='h8'>(+20)1011287860</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
                <FontAwesomeIcon icon={faLocationDot}/>
                <Typography variant='h8'>Cairo, Egypt</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
            <FontAwesomeIcon icon={faGraduationCap}/>
            <Typography variant='h8'>GPA: 3.28</Typography>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
            <FontAwesomeIcon icon={faUniversity}/>
            <Typography variant='body2'>Computers and Artificial Intelligence,<br/> Cairo University</Typography>
            </Stack>

            <Box id='links' sx={{display:"flex", justifyContent:"center", gap:3}}>
                <Link className="linkedin" href="https://www.linkedin.com/in/mennatallah-ahmed-0b0a72277/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin}  />
                </Link>

                <a className='github' href="https://github.com/mennatallah222" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub}  />
                </a>
            </Box>

        </Box>
    </Box>
}