import React from "react";
import { useState, createContext } from "react";
export const FilmContext = createContext();
export const FilmeProvider = (probs) => {
    const [films, setFilms] = useState([
        {
            title: "Difret",
            director: "Zeresenay Berhane Mehari",
            release_year: 2014,
            category: ["Drama", "Crime"],
            rating: 7.4,
        },
        {
            title: "Lamb",
            director: "Yared Zeleke",
            release_year: 2015,
            category: ["Drama"],
            rating: 6.9,
        },
        {
            title: "Teza",
            director: "Haile Gerima",
            release_year: 2008,
            category: ["Drama"],
            rating: 7.1,
        },
        {
            title: "Harvest",
            director: "Haile Gerima",
            release_year: 1976,
            category: ["Drama"],
            rating: 6.7,
        },
        {
            title: "Crumbs",
            director: "Miguel Llansó",
            release_year: 2015,
            category: ["Drama", "Sci-Fi"],
            rating: 6.1,
        },
    ]);

    return (
        <FilmContext.Provider value={[films, setFilms]}>
            {probs.children}
        </FilmContext.Provider>
    );
};
