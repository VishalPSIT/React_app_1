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
    <div>

      <div>
          <Nav/>
      </div>

      <div>
          <Filter filterData={filterData}/>
      </div>

      <div>
          {
            loading ? (<Spinner/>) : (<Cards courses = {courses} />) 
          }
      </div>

    </div>
  );
}

export default App;
//1.32.28y
