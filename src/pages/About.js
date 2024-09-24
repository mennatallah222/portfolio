import img1 from '../assets/images/1.webp';

export default function About(){
    return <div className="about" style={{borderLeft:"5px solid #a4dfff3e", marginTop:"10%"}}>
        <div style={{ marginLeft:"10px"}}>
            <p>hello, my name is</p>
            <h1>Mennatallah Ahmed</h1>
            <h2>
                I'm a software developer
            </h2>
            <h3>
                I can be a valuable asset to your team and contribute to your projects with my skills and enthusiasm.
            </h3>
            <h3>
                Please don't hesitate to check out my resume or reach out on the contact's page.
            </h3>
            <a href="../assets/Mennatallah_Ahmed.pdf" download="Mennatallah_Ahmed.pdf">Download My CV</a>

        </div>

        <div style={{display:"grid", width:"fit-content"}}>
            <img src={img1} alt='img' style={{width:"350px"}}></img>
        </div>
    </div>
}