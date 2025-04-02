import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { ThreeDots } from "react-loader-spinner";
import { searchMovies, getPopularMovies } from "../services/api";
export default function Home(){

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        const loadPopularMovies = async ()=>{
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(error){
                console.log(error)
                setError(false)
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies();
    }, [])
    function handleSubmitBtn(e){
        e.preventDefault();
        console.log(e.target.value);
        setSearchQuery("");
    }
    return(
        <div className="w-full h-screen">
            <div className="pb-[2%]">
                <form onSubmit={handleSubmitBtn} className="relative w-[50%] m-auto">
                    <input value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="w-full text-black placeholder:text-black bg-transparent border-[1px] border-slate-700 rounded-full pl-3 pr-16 py-1.5 outline-none" type="search" placeholder="Search Movies" />
                    <button className="absolute right-0 border-[1px] border-l-0 border-black bg-zinc-300 text-black px-2 py-1.5 rounded-r-full">Search</button>
                </form>
                {error && <div>{error}</div>}
                {loading? (
                    <ThreeDots height={20} width={40} color="white" />
                    ) : (
                    <div className="flex flex-wrap gap-5">
                        {movies.map((movie) => {
                            return (
                                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ? <MovieCard movie={movie} key={movie.id}/> : null
                            )
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}