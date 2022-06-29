import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const useRequestData = (url, initialState) => {
   const [data, setData] = useState(initialState)

   useEffect(() => {
      axios.get(url)
         .then((response) => setData(response.data))
         .catch((error) => alert(error.response))
   }, [url])

   return data
}


export const useRequestDetails = (url, header, initialState) => {
   const [data, setData] = React.useState(initialState);

   useEffect(() => {
      axios.get(url, header)
         .then((response) => setData(response.data))
         .catch((error) => alert(error.response))
   }, [url]);

   return data;
}

export const useProtectedPage = () => {
   const navigate = useNavigate()

   useEffect(() => {
      const token = localStorage.getItem("token");

      if (token === null) {
         alert("Faça o Login para acessar a página")
         navigate("/login")
      }
   })

}