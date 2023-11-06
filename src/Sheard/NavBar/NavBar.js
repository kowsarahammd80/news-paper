import React from "react";
import "./NavBar.css";
import logo from '../../assets/jaijaikal-logo-5.png'

const NavBar = () => {
  return (
    <div>
      <section className="mt-16 mb-7">

        <div className="border-set">
          
          {/* head for social link */}
          <div className="flex justify-between items-center bg-green-500">
            <p className="onlie-text text-sm lg:text-xl xl:text-xl xxl:text-xl font-semibold">
              অনলাইন ভার্সন
            </p>

            <div className="text-xl lg:text-3xl xl:text-3xl md:text-2xl">

              <span className="me-4 text-blue-700">
               <i class="fa-brands fa-facebook fa-beat"></i>
              </span>

              <span className="me-4 text-blue-500">
               <i class="fa-brands fa-twitter fa-beat"></i>
              </span>

              <span className="me-3 text-red-600">
               <i class="fa-brands fa-youtube fa-beat"></i>
              </span>

            </div>

          </div>

          {/* head for logo */}

         <div className="border">  

           <div className="nav-logo-div">
             <img src={logo} alt=""  className="w-full mt-3"/>

             <p className="text-sm lg:text-xl xl:text-xl xxl:text-xl my-5 ms-6">শনিবার, ০৪ নভেম্বর ২০২৩, ২০ কার্তিক ১৪৩০</p>
           </div>
           
           {/* date */}

           

         </div>

        </div>
    
      </section>
    </div>
  );
};

export default NavBar;
