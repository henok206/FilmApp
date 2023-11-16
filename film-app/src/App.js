import "./App.css";
import FilmList from "./componets/FilmList";
import Nav from "./componets/Nav";
import AddFilm from "./componets/AddFilm";
import { FilmeProvider } from "./componets/FilmContext";
const App = () => {
    return (
        <FilmeProvider>
            <div className="App">
                <Nav />
                <AddFilm />
                <FilmList />
            </div>
        </FilmeProvider>
    );
};

export default App;
