import React, { useEffect, useState } from "react";
import { apiUrl , filterData } from "./data";
import Nav from "./components/nav";
import Filter from "./components/filter";
import Cards from "./components/cards";
import Spinner from "./components/spinner";
import { toast } from "react-toastify";
function App() {

  const [courses , setCourses] = useState(null);
  const [loading , setLoading] = useState(true);

  async function fetchData(){
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      setCourses(output.data);
      console.log(output);
    }
    catch(error){
      toast.error("something went wrong");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="min-h-screen flex flex-col">

      <div >
          <Nav/>
      </div>
      <div className="bg-gray-400"> 
          <div>
              <Filter filterData={filterData}/>
          </div>

          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
              {
                loading ? (<Spinner/>) : (<Cards courses = {courses} />) 
              }
          </div>

      </div>
      

    </div>
  );
}

export default App;
//1.32.28y
