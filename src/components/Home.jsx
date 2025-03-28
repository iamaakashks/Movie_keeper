import { useState } from "react"
import MovieCard from "./MovieCard"

export default function Home(){

    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "Interstellar", release_date: 2014, img_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSngBJ0B7UDrLUkDlp6DCQLsEYuWR-DiHwbnxFFCniB3HiP3f3NZmR1-lKSC34ge6YXu4LX"},
        {id: 2, title: "Bajrangi Bhaijan", release_date: 2015, img_link:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStVc1_WLmhcpTuhSUtKVMTBltUP7nAoCFA6HBQhV0YXT0ZjGSrZec3UFtCOgRu3B6PBoRD"},
        {id: 3, title: "My Name is Khan", release_date: 2010, img_link: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4swi-gB89D9trD3dXqKkvOffzYuuJCzahtSjJPB6bRuTMLyRdOepxOlhUM6JsScMtlusmgg"},
        {id: 4, title: "My Name is Khan", release_date: 2010, img_link: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4swi-gB89D9trD3dXqKkvOffzYuuJCzahtSjJPB6bRuTMLyRdOepxOlhUM6JsScMtlusmgg"},
        {id: 5, title: "My Name is Khan", release_date: 2010, img_link: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4swi-gB89D9trD3dXqKkvOffzYuuJCzahtSjJPB6bRuTMLyRdOepxOlhUM6JsScMtlusmgg"},
        {id: 6, title: "My Name is Khan", release_date: 2010, img_link: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4swi-gB89D9trD3dXqKkvOffzYuuJCzahtSjJPB6bRuTMLyRdOepxOlhUM6JsScMtlusmgg"},
        {id: 7, title: "My Name is Khan", release_date: 2010, img_link: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4swi-gB89D9trD3dXqKkvOffzYuuJCzahtSjJPB6bRuTMLyRdOepxOlhUM6JsScMtlusmgg"},
        {id: 8, title: "My Name is Khan", release_date: 2010, img_link: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4swi-gB89D9trD3dXqKkvOffzYuuJCzahtSjJPB6bRuTMLyRdOepxOlhUM6JsScMtlusmgg"},
        {id: 9, title: "My Name is Khan", release_date: 2010, img_link: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4swi-gB89D9trD3dXqKkvOffzYuuJCzahtSjJPB6bRuTMLyRdOepxOlhUM6JsScMtlusmgg"},
    ]
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
                    <button className="absolute right-0 border-[1px] border-zinc-950 text-black px-2 py-1.5 rounded-full ">Search</button>
                </form>
            </div>
            <div className="flex flex-wrap justify-between gap-y-4">
                {movies.map((movie) => {
                    return (
                        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) ? <MovieCard movie={movie} key={movie.id}/> : null
                    )
                })}
            </div>
        </div>
    )
}