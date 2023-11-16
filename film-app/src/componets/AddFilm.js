import React, { useState, useContext } from "react";
import { FilmContext } from "./FilmContext";

const AddFilm = () => {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [releaseyear, setReleaseYear] = useState("");
    const [category, setCategory] = useState("");
    const [rating, setRating] = useState("");
    const [films, setFilms] = useContext(FilmContext);

    const updateTitle = (e) => {
        setTitle(e.target.value);
    };
    const updateDirector = (e) => {
        setDirector(e.target.value);
    };
    const updateReleaseYear = (e) => {
        setReleaseYear(e.target.value);
    };
    const updateCategory = (e) => {
        setCategory(e.target.value);
    };
    const updateRating = (e) => {
        setRating(e.target.value);
    };
    const AddFilm = (e) => {
        e.preventDefault();
        setFilms((PrevFilms) => [
            ...PrevFilms,
            {
                title: title,
                director: director,
                releaseyear: releaseyear,
                rating: rating,
            },
        ]);
    };

    return (
        <form onSubmit={AddFilm}>
            <input
                type="text"
                title="title"
                value={title}
                onChange={updateTitle}
            />
            <input
                type="text"
                director=" director"
                value={director}
                onChange={updateDirector}
            />
            <input
                type="text"
                release_year=" release_year"
                value={releaseyear}
                onChange={updateReleaseYear}
            />
            <input
                type="text"
                category="category"
                value={category}
                onChange={updateCategory}
            />
            <input
                type="text"
                rating="rating"
                value={rating}
                onChange={updateRating}
            />
            <button type="submit">submit</button>
        </form>
    );
};
export default AddFilm;
