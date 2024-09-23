
export default function ProjectCard({isLtoR, name, description, href, skills, img}){
    return <div className="about">
    {
        isLtoR?
        (
            <div style={{display:"grid", width:"90%", gridTemplateColumns:"1fr 0.3fr", alignItems:"center", gap:"20px"}}>            
                <div style={{display:"flex", flexDirection:"column"}}>
                    <h1>{name}</h1>
                    <h3>  {description}</h3>
                    <h3>{skills}</h3>
                    <br/>
                </div>
                
                <div className="image-container">
                    <img src={img} alt='' style={{width:"250px", height:"250px", borderRadius:"10px"}} />
                    <div id="imgDiv" style={{ width:"250px", height:"250px"}}>
                    <a href={href} style={{ width:"100px", display:"flex", justifyContent:"center", cursor:"pointer", borderRadius:"10px", border:"none"}}>Link</a>
                    </div>
                </div>
                    
            </div>
        )
        :
        (
            <div style={{display:"grid", width:"90%", gridTemplateColumns:"0.3fr 1fr", alignItems:"center", gap:"20px"}}>            
                <div className="image-container">
                    <img src={img} alt='' style={{width:"250px", height:"250px", borderRadius:"10px"}} />
                    <div id="imgDiv" style={{ width:"250px", height:"250px"}}>
                        <a href={href} style={{width:"100px", display:"flex", justifyContent:"center", cursor:"pointer", borderRadius:"10px", border:"none"}}>Link</a>
                    </div>
                </div>

                <div style={{display:"flex", flexDirection:"column"}}>
                    <h1>{name}</h1>
                    <h3>  {description}</h3>
                    <h3>{skills}</h3>
                    <br/>
                </div>
            
        </div>
        )
        
    }
        
    <br/>
                </div>
}