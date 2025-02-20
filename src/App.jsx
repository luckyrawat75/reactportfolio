import React from "react";
  // ✅ Navigation bar
 // ✅ Routes file
import Navpage from "./Component/Nav";
import Routing from "./Utility/Routing";

const App=() =>{
  return (
    <div>
     <Navpage/> {/* Navbar for navigation */}
      <Routing/>  {/* Routing component */}
    </div>
  );
}

export default App;
