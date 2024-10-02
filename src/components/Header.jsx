import { useLocation, useNavigate} from 'react-router-dom'
import React from 'react'

export default function Header() {
   const location = useLocation();
   const navigate = useNavigate();
    console.log(location.pathname)
   function pathMatchRoute(route) {
      if(route === location.pathname) {
        return true
      }
   }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
      <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
         <div>
           <img src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
              alt="logo" className='h-5 cursor-pointer' onClick={() =>navigate("/")} 
           />
         </div>
         <div>
           
         <ul className="flex space-x-10">
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-2 ${
                pathMatchRoute("/") && "text-slate-950  border-b-red-500"
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-2 ${
                pathMatchRoute("/offers") && "text-slate-950  border-b-red-500"
              }`}
              onClick={() => navigate("/offers")}
            >
              Offers
            </li>
            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-2 ${
                pathMatchRoute("/sign-in") && "text-slate-950 border-b-red-500"
              }`}
              onClick={() => navigate("/sign-in")}
            >
              Sign in
            </li>
          </ul>
         
         
         
         
         
         </div>
      </header>
    </div>
  )
}
