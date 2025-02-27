import { useEffect } from "react"
import { useNavigate } from "react-router"

const DefaultRoute = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        navigate("/home")
    },[navigate])
  return (
    null
  )
}

export default DefaultRoute