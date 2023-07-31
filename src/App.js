// import logo from './logo.svg';
import './App.css';
import GetMovies from './Components/get-movies';
import Navbar from './Components/get-movies/Navbar';
import SearchResultsPage from './Components/get-movies/SearchResults/search';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div className='main'>
          <Navbar/>
          {/* <GetMovies/> */}
          <Routes>
           <Route path= "/" element ={<GetMovies/>}/>
           <Route path='/search/:query' element ={<SearchResultsPage/>} />
        

          </Routes>
          
  
    </div>
    </BrowserRouter>
   
  );
}
export default App;
