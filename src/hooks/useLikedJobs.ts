import { useEffect, useState } from "react";

export function useLikedJobs(){
    const [liked, setLiked] = useState<string[]>([]);

    useEffect(()=>{
        const stored = localStorage.getItem('liked_jobs')
        if(stored) setLiked(JSON.parse(stored))
    }, [])

    useEffect(()=>{
        localStorage.setItem('liked_jobs', JSON.stringify(liked))
    }, [liked])

    const isLiked = (id:string) => liked.includes(id)

    const toggleLiked = (id: string) =>{
        setLiked(prev =>
            prev.includes(id)? prev.filter(j => j !== id) : [...prev, id]
        )
    }
    return { liked, isLiked, toggleLiked }
}