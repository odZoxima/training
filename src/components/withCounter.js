import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
    
  const NewComponent = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
      setCount(count + 1);
    };

    const decrementCount = () => {
      count > 0 && setCount(count - 1);
    };

    return (
      <OriginalComponent
        count={count}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
      />
    );
  };

  // Build it in Class component


//   class NewComponent extends React.Component {

//       render(){
//           return <OriginalComponent />
//       }
//   }

  return NewComponent;
};

export default UpdatedComponent;
