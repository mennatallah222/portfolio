import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";

const theme=createTheme({
    typography:{
        fontFamily:'Cairo, sans-serif'
    }
});

export default function ProjectCard({isLtoR, name, description, href, skills, img}){
    return <ThemeProvider theme={theme}>
    
    <Box>
    {
        isLtoR?
        (
            <Box mb={4} style={{display:"grid", width:"90%", gridTemplateColumns:"1fr 0.3fr", alignItems:"center", gap:"20px"}}>            
                <Box style={{display:"flex", flexDirection:"column"}}>
                    <Typography variant="h4" >{name}</Typography>
                    <Typography variant="h6">  {description}</Typography>
                    <Typography variant="h7">{skills}</Typography>
                </Box>
                
                <Box className="image-container">
                    <img src={img} alt='' style={{width:"250px", height:"250px", borderRadius:"10px"}} />
                    <Box id="imgDiv" style={{ width:"250px", height:"250px"}}>
                    <a href={href} style={{ width:"100px", display:"flex", justifyContent:"center", cursor:"pointer", borderRadius:"10px", border:"none"}}>Link</a>
                    </Box>
                </Box>
                    
            </Box>
        )
        :
        (
            <Box mb={4} style={{display:"grid", width:"90%", gridTemplateColumns:"0.3fr 1fr", alignItems:"center", gap:"20px"}}>            
                <Box className="image-container">
                    <img src={img} alt='' style={{width:"250px", height:"250px", borderRadius:"10px"}} />
                    <Box id="imgDiv" style={{ width:"250px", height:"250px"}}>
                        <a href={href} style={{width:"100px", display:"flex", justifyContent:"center", cursor:"pointer", borderRadius:"10px", border:"none"}}>Link</a>
                    </Box>
                </Box>

                <Box style={{display:"flex", flexDirection:"column"}}>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="h6">  {description}</Typography>
                    <Typography variant="h7">{skills}</Typography>
                </Box>
            
        </Box>
        )
        
    }
        
        </Box>
    </ThemeProvider>
}