// import React, { useState } from 'react';

// const Parent = () => {
//   const [sharedData, setSharedData] = useState('');

//   return (
//     <div>
//       <Child1 setSharedData={setSharedData} />
//       <Child2 sharedData={sharedData} />
//     </div>
//   );
// };

// const Child1 = ({ setSharedData }) => {
//   const handleChange = (e) => {
//     setSharedData(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" onChange={handleChange} placeholder="Enter data" />
//     </div>
//   );
// };

// const Child2 = ({ sharedData }) => {
//   return (
//     <div>
//       <h2>Received Data:</h2>
//       <p>{sharedData}</p>
//     </div>
//   );
// };

// export default Parent;
