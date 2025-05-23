'use client'
import { useLikedJobs } from "@/hooks/useLikedJobs"

function LikeButton({id}:{id:string}) {
    const {isLiked, toggleLiked} = useLikedJobs();

  return (
    <button onClick={() =>toggleLiked(id)}
    className="text-sm text-purple-700 hover:underline ml-auto">
        {isLiked(id) ? 'Liked':'Like'}
    </button>
  )
}

export default LikeButton
