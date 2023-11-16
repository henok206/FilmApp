import React, { useContext } from "react";

import { FilmContext } from "./FilmContext";
const Nav = () => {
    const [films, setFilms] = useContext(FilmContext);
    return (
        <div>
            <h3>Henok Film App</h3>
            <h4>Total Number of Films:{films.length}</h4>
        </div>
    );
};
export default Nav;
