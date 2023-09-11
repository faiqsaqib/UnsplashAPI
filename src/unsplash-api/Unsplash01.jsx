import React, {useState, useEffect} from 'react'

function Unsplash01() {
    const [unsplash, setUnsplash] = useState([]);
    const [search, setSearch] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
       const link = `https://api.unsplash.com/search/photos?&query=${search}&client_id=vJ-GWIJio-iEGKxzxeuInd2vXQzFQKHmxqwpON3jbmA`;
            const res = await fetch(link);
            const data = await res.json();
            console.log(data)
            setUnsplash(data.results);
   
    }

    useEffect(() => {
      async  function apis(){
            const link2 = `https://api.unsplash.com/photos?client_id=vJ-GWIJio-iEGKxzxeuInd2vXQzFQKHmxqwpON3jbmA`;
             const res1 = await fetch(link2);
             const data1 = await res1.json();
             setUnsplash(data1);

        }
        apis()
    }, []);
  return (
    <>
    <center>
          
            <label>
              Enter your name:
              <input
                type="text"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button onClick={handleClick}>click me</button>
            </label>
          
          {unsplash?.map((pack) => {
            const { urls, likes, id } = pack;
            return (
              <div key={id}>
                <div style={{color:"black"}}> {likes}</div>
                <img src={urls.small} alt="/" />
              </div>
            );
          })}
    </center>

      
    </>
  )
}

export default Unsplash01;
