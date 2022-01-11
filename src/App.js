import "./App.css";
import CharactersList from "./pages/CharactersList";
import Search from "./pages/Search";
import Character from "./pages/Character";
import {Route,Routes} from 'react-router'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharactersList/>}/>
        <Route strict exact path="/search" element={<Search/>}/>
        <Route strict exact path="/:id" element={<Character/>}/>
      </Routes>
    </div>
  );
}

export default App;
