import img1 from '../assets/images/1.webp';
import { Box, Typography, Link } from '@mui/material';

export default function About() {
  return (
    <Box 
      className="about" 
      sx={{ 
        width:"90%",
        borderLeft: "5px solid #a4dfff3e", 
        mt: "10%",
        ml:"3%", 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        p: 2 
      }}
    >
      <Box sx={{ ml: 2 }}>
        <Typography variant="body1" sx={{ mb: 1, fontFamily:'Cairo', }}>
          Hello, my name is
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 1, fontFamily:'Cairo' }}>
          Mennatallah Ahmed
        </Typography>
        <Typography variant="h5" sx={{ mb: 2, fontFamily:'Cairo' }}>
          I'm a software engineer
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, fontFamily:'Cairo' }}>
          I can be a valuable asset to your team and contribute to your projects with my skills and enthusiasm.
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, fontFamily:'Cairo' }}>
          Please don't hesitate to check out my resume or reach out on the contact's page.
        </Typography>
        <Link href="/Mennatallah_Ahmed.pdf" download="Mennatallah_Ahmed.pdf" sx={{ fontWeight: 'bold' }}>
          Download My CV
        </Link>
      </Box>

      <Box sx={{ display: 'grid', width: 'fit-content' }}>
        <img src={img1} alt="img" style={{ width: '350px', borderRadius: '8px' }} />
      </Box>
    </Box>
  );
}
