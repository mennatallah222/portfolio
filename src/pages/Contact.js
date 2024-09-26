import { Box, Typography, TextField, Button, Grid, createTheme, ThemeProvider } from '@mui/material';

const theme=createTheme({
    typography:{
        fontFamily:'Cairo, sans-serif'
    }
});

export default function Contact() {
  return (
    <ThemeProvider theme={theme}>
    <Box  sx={{
        display: 'flex', flexDirection: 'column', alignItems: 'center', 
        justifyContent: 'center', p: 4, mt:4}}>

      <Typography variant="h3" textAlign="center" gutterBottom>
        Let's Work Together
      </Typography>

      <Box component="form" sx={{width:"100%",maxWidth: 600, mt:3, p:3, backgroundColor:"#f5f5f5", borderRadius: 2, boxShadow: 3}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField fullWidth required label="Subject" variant='outlined' />
            </Grid>

            <Grid item xs={12}>
                <TextField fullWidth required multiline label="Leave a message" variant='outlined' rows={4} />
            </Grid>

            <Grid item xs={12}>
                <Button fullWidth type='submit' variant='contained' sx={{mt:2, py:1.5 ,bgcolor:"green", boxShadow:3}} >Send message</Button>
            </Grid>
            
        </Grid>
      </Box>
    </Box>
    </ThemeProvider>
  );
}
