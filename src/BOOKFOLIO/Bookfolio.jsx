import React,{useState} from 'react'

function Bookfolio() {
    // const [bgColor, setBgColor] = useState('blue');

    const darktheme = () => {
        document.getElementById("main").style.backgroundColor = "black";
        document.getElementById("main").style.color = "white";
        document.getElementById("nav").style.backgroundColor = "rgb(91, 91, 91)";
      };
    const lighttheme = () => {
        document.getElementById("main").style.backgroundColor = "white";
        document.getElementById("main").style.color = "black";
        document.getElementById("nav").style.backgroundColor = "rgb(91, 91, 91)";
      };


  return (
    <>
    <section style={{width:"100vw",height:"100vh"}}>
    <div style={{display:"flex",}}>
    {/* {form === "Bookfolio" ? (
        <button className="btn btn-primary" style={{ backgroundColor: 'black',margin:"50px", width:"5rem"}}
      onClick={darktheme}>DARK</button>
      ):(
      <button className="btn btn-primary" style={{ backgroundColor: 'black',margin:"50px", width:"5rem"}}
      onClick={lighttheme}>LIGHT</button>
    )} */}
    <button className="btn btn-primary" style={{ backgroundColor: 'black',margin:"50px", width:"5rem"}}
      onClick={darktheme}>DARK</button>
    <button className="btn btn-primary" style={{ backgroundColor: 'black',margin:"50px", width:"5rem"}}
      onClick={lighttheme}>LIGHT</button>
      
    </div>
        <center>
            <h1 style={{color:'black', fontSize:'30px'}}><b>Bookfolio</b></h1>
            <div style={{display:"flex",justifyContent:"center",gap:"80px", marginTop:"50px"}}>
                <img src="/day.jpg" style={{width:"17vw", height:"55vh"}} alt="" />
                <img src="/real.jpeg" style={{width:"17vw", height:"55vh"}} alt="" />
                <img src="/topten.webp" style={{width:"17vw", height:"55vh"}} alt="" />
            </div>
        </center>
    </section>
    {/* {form === "darktheme" ? <darktheme /> : <lighttheme />} */}

    </>
  )
}

export default Bookfolio;
