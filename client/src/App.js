
import './App.css';
import { BrowserRouter,Routes,Route ,useNavigate, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import TopList from './components/TopList';
import AddSongs from './components/AddSongs';
import {useState,useEffect} from 'react'
import axios from 'axios'

function App() {

  const [filterSong,setFilterSong] = useState([])
  // const [Song,setSong] = useState([])

  let HandleInput=(songData)=>{
    axios.get("http://localhost:5000/song/").then((response) =>{
      // console.log(response.data[0].songs)
    let ss= response.data.filter((v,i)=>{
      return response.data[i].songs.toLowerCase().includes(songData.toLowerCase())
    })
    console.log(ss)
      setFilterSong(ss)
  }).catch((error) => console.log("errrr",error))
  }

  
    
  

  return (
    <BrowserRouter>
     <NavBar HandleInput={HandleInput}/>
     <Routes>
            <Route path="/" element={<TopList filterSong={filterSong}/>}/>
            <Route path="/addsong" element={<AddSongs/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
