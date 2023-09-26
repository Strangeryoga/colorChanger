
import {useState} from 'react'

function App() {
  
  
  const [color, setColor] = useState("olive")

  function cgr(e){
    setColor(e.target.style.backgroundColor);
  }

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-10 py-3 rounded-3xl">
        <button onClick={cgr} style={{backgroundColor:"red", borderRadius:'10px',padding:'4px 4px'}}>Red</button>
        <button onClick={cgr} style={{backgroundColor:"blue", borderRadius:'10px',padding:'4px 4px' }}>Blue</button>
        <button onClick={cgr} style={{backgroundColor:"green",borderRadius:'10px',padding:'4px 4px',}}>Green</button>
        <button onClick={cgr} style={{backgroundColor:"yellow", borderRadius:'10px',padding:'4px 4px',}}>Yellow</button>
        <button onClick={cgr} style={{backgroundColor:"black", color:"white",borderRadius:'10px',padding:'4px 4px' }}>Black</button>
        <button onClick={cgr} style={{backgroundColor:"white",borderRadius:'10px',padding:'4px 4px', border:'1px solid #000', }}>White</button>


        </div>
      </div>
    </div>
  )

}

export default App
