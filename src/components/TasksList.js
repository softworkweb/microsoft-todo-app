// Importing React and the RemoveBtn component
import React from 'react';
import RemoveBtn from './Buttons/RemoveBtn';
import { useSelector } from 'react-redux';
// Functional component for rendering individual task items
function TasksList({ id, task, day_Time, removeItem }) {
  const checked = useSelector((change) => change.state.check);
  return (
    // Fragment to group multiple elements without adding an extra node to the DOM
    <>
      {/* Container for the task item, flex layout with vertical alignment */}
      <div className="flex items-center px-[2px] w-full my-[1px] md:my-[5px]">
        {/* Conditional rendering of horizontal line based on task completion */}

        {checked ? (
          <hr className="w-[8px] h-[78px] bg-success md:h-[87px]"></hr>
        ) : null}

        {/* Container for the task details and remove button */}
        <div className="w-full">
          {/* Horizontal line above the task details */}
          <hr className="bg-[#0b141820] h-[2px] w-full"></hr>

          {/* Flex container for the task details and remove button */}
          <div className="flex items-center h-full justify-between pr-7 md:pr-15">
            {/* Container for the task details with padding */}
            <div className=" p-3 md:p-5">
              {/* Task title with bold font */}
              <h1 className="font-bold">{task}</h1>
              {/* Task details with a smaller font size */}
              <p className="text-[16px] text-[#0b141868] md:text-[18px]">
                {day_Time}
              </p>
            </div>

            {/* Container for the RemoveBtn component */}
            <div>
              {/* Render the RemoveBtn component with the task ID and removeItem function */}
              <RemoveBtn id={id} removeItem={removeItem} />
            </div>
          </div>

          {/* Horizontal line below the task details */}
          <hr className="bg-[#0b141820] h-[2px] w-full"></hr>
        </div>
      </div>
    </>
  );
}

// Export the TasksList component
export default TasksList;
