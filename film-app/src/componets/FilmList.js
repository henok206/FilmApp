import React from "react";
import { useState, useContext } from "react";
import Films from "./Films";
import { FilmContext } from "./FilmContext";
const FilmList = () => {
    const [films, setFilms] = useContext(FilmContext);
    return (
        <div>
            {films.map((film) => (
                <Films
                    title={film.title}
                    director={film.director}
                    release_year={film.release_year}
                    category={film.category}
                    rating={film.rating}
                />
            ))}
        </div>
    );
};

export default FilmList;
