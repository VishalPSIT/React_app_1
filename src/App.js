import React, { useEffect, useState } from "react";
import { apiUrl , filterData } from "./data";
import Nav from "./components/nav";
import Filter from "./components/filter";
import Cards from "./components/cards";
import { toast } from "react-toastify";
function App() {
  const [courses , setCourses] = useState(null);
  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("something went wrong");
      }
    }
  })

  return (
    <div>
      
      <Nav />
      <Filter filterData={filterData}/>
      <Cards courses={courses}/>

    </div>
  );
}

export default App;
//1.32.28