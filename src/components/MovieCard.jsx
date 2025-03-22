import React from 'react';
export default function MovieCard({movie}){
    function handleFavouriteBtn(){
        console.log("movie bookmarked");
    }
    return (
        <div className="movie_card">
            <div className="movie_poster w-52 h-72 relative">
                <img className="w-full h-full object-cover" src={movie.img_link} alt="img" />
                <button className="absolute top-2 right-2 border-[1px] rounded-full p-1 bg-zinc-800" onClick={handleFavouriteBtn}>❤️</button>
            </div>
            <div className="movie_info font-medium">
                <h3>{movie.title}</h3>
                <h4>{movie.release_date}</h4>
            </div>
        </div>
    )
}