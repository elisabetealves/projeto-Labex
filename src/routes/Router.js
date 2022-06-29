import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import ListaTripsPage from '../pages/ListTripsPage/ListTripsPage'
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import AdminHomePage from '../pages/AdminHomePage/AdminHomePage'
import CreateTripPage from '../pages/CreateTripPage/CreateTripPage'
import TripDetailsPage from '../pages/TripDetailsPage/TripDetailsPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

export const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<HomePage />} />
            <Route path="/trips/list" element={<ListaTripsPage />} />
            <Route path="/trips/application/:id" element={<ApplicationFormPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin/trips/list" element={<AdminHomePage />} />
            <Route path="/admin/trips/create" element={<CreateTripPage />} />
            <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
            <Route path="*" element={<ErrorPage />} />
         </Routes>
      </BrowserRouter>
   )
}