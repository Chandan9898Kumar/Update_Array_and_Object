import React from 'react'
import { NavLink } from "react-router-dom"
const Homes=()=>{
return(
<>
<label>Home page</label><br /><br />
<NavLink to='/ObjectChange'>Change Nested Object</NavLink><br /><br />
{/* <NavLink to='/StateChange'>Change Nested Object</NavLink><br /><br /> */}


</>    
)
}
export default Homes