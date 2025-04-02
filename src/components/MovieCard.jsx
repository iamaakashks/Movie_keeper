import React from 'react';
export default function MovieCard({movie}){
    function handleFavouriteBtn(){
        alert("movie bookmarked");
    }
    return (
        <div className="movie_car w-72 pt-4">
            <div className="movie_poster w-full h-[90%] relative">
                <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="img" />
                <button className="absolute top-2 right-2 border-[1px] rounded-full p-1 bg-zinc-800" onClick={handleFavouriteBtn}>❤️</button>
            </div>
            <div className="movie_info font-medium">
                <h3>{movie.title}</h3>
                <h4>{movie.release_date?.split("-")[0]}</h4>
            </div>
        </div>
    )
}