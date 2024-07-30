import React, { useState } from 'react'
import PropTypes from 'prop-types';
const Header = () => {
    const[count,setCount]=useState(0)
    function handleincrement(){
        setCount(count+2)
    }

    function handledecrement(){
        setCount(count-2)
    }
    /*Object Destructuring*/
    // const object={name:"banu",city:"neyveli",college:"KCT"}
    // const{name,city,college}=object //this is obj destructuring..
    // console.log(name);
    // console.log(college);

     /*Array Destructuring*/
    //  const arr=["chitra","banu"]
    //  const[firstname,lastname]=arr //in firstname ,value in index-0 will be stored,and in lastname, value in index-1 will be stored

    // console.log(props)


  return (
    
    <div>
    
      <button onClick={handleincrement}>Increment</button>{count} 
      <br></br>
      <button onClick={handledecrement}>Decrement</button>
      
    </div>
  )
}

/*Prop Validation*/
// Header.proptypes={
//     clg:PropTypes.string.isRequired,
//     percentage:PropTypes.string.isRequired,
//     subjects:PropTypes.string.isRequired

// }
export default Header
