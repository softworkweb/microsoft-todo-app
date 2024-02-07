// Importing React and the IoMdCloseCircle icon from the react-icons/io library
import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { addBtn } from '../../app/stateSlice';
import { useDispatch } from 'react-redux';
// Functional component for the CancelButton
function CancelButton() {
  const dispatch = useDispatch();
  return (
    <>
      {/* Container for the CancelButton */}
      <div className="flex flex-col items-center">
        {/* Button for small screens (md:hidden) */}
        <button
          className="md:hidden"
          onClick={() => {
            // Set addBtn state to true when the button is clicked
            dispatch(addBtn(true));
          }}
        >
          {/* Display the IoMdCloseCircle icon with specified color and size */}
          <IoMdCloseCircle color="#dc4c64" size={100} />
        </button>

        {/* Button for larger screens (hidden on small screens - md:flex) */}
        <button
          className="hidden md:flex"
          onClick={() => {
            // Set addBtn state to true when the button is clicked
            dispatch(addBtn(true));
          }}
        >
          {/* Display the IoMdCloseCircle icon with specified color and size */}
          <IoMdCloseCircle color="#dc4c64" size={130} />
        </button>
      </div>
    </>
  );
}

// Export the CancelButton component
export default CancelButton;
