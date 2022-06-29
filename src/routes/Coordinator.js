import { useNavigate } from "react-router-dom"

//const navigate = useNavigate()

// Geral
export const goBack = (navigate) => {
   navigate(-1)
}

export const goHome = (navigate) => {
   navigate('/')
}

// HomePage
export const goToListTrip = (navigate) => {
   navigate('/trips/list')
}

export const goToLoignPage = (navigate) => {
   navigate('/login')
}

// LoginPage 
export const goToAdminHome = (navigate) => {
   navigate("/admin/trips/list")
}

// AdminHomePage 
export const goToCreatTrip = (navigate) => {
   navigate("/admin/trips/create")
}

export const goToDetailsPage = (navigate, id) => {
   navigate(`/admin/trips/${id}`)
}

export const logout = (navigate) => {
   localStorage.removeItem("token")
   navigate('/login');
}

//ListTripsPage
export const goToApplicationForm = (navigate, id) => {
   navigate(`/trips/application/${id}`)
}