import React from "react";

const Films = (probs) => {
    return (
        <div>
            <h2>Title: {probs.title}</h2>
            <p>Director:{probs.director}</p>
            <p>Release_Year:{probs.release_year}</p>
            <p>Gategory:{probs.category}</p>
            <p>Rating: {probs.rating}</p>
        </div>
    );
};

export default Films;
