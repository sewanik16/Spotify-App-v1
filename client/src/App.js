
import './App.css';
import { BrowserRouter,Routes,Route ,useNavigate, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import TopList from './components/TopList';
import AddSongs from './components/AddSongs';


function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Routes>
            <Route path="/" element={<TopList/>}/>
            <Route path="/addsong" element={<AddSongs/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
