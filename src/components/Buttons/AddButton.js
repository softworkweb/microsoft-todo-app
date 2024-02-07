// Importing React and the IoMdAddCircle icon from the react-icons/io library
import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { addBtn } from '../../app/stateSlice';
import { useDispatch } from 'react-redux';

// Functional component for the AddButton
function AddButton() {
  const dispatch = useDispatch();
  return (
    <>
      {/* Container for the AddButton */}
      <div className="flex flex-col items-center">
        {/* Button for small screens (md:hidden) */}
        <button
          className="md:hidden"
          onClick={() => {
            // Set addBtn state to false when the button is clicked
            dispatch(addBtn(false));
          }}
        >
          {/* Display the IoMdAddCircle icon with specified color and size */}
          <IoMdAddCircle color="#14a44d" size={100} />
        </button>

        {/* Button for larger screens (hidden on small screens - md:flex) */}
        <button
          className="hidden md:flex"
          onClick={() => {
            // Set addBtn state to false when the button is clicked
            dispatch(addBtn(false));
          }}
        >
          {/* Display the IoMdAddCircle icon with specified color and size */}
          <IoMdAddCircle color="#14a44d" size={130} />
        </button>
      </div>
    </>
  );
}

// Export the AddButton component
export default AddButton;
