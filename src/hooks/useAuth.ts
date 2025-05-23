import { useEffect, useState } from "react"
import {User, onAuthStateChanged} from 'firebase/auth'
import {auth} from '@/app/lib/firebase'
function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return unsub
    }, [])
  return {user, loading}
}

export default useAuth
