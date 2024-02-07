import React from 'react';
import { useState } from 'react';
import TaskAdded from './TaskAdded';
import { useSelector, useDispatch } from 'react-redux';
import { check } from '../app/stateSlice';
import { now } from '../app/stateSlice';
// code to push to an array

// import { checked } from '../app/stateSlice';
// Functional component for the NewTask form
function NewTask({ id, task, setTask, dayTime, setDayTime, updatedTaskList }) {
  // State to track the added task message
  const [addedTask, setAddedTask] = useState('');

  const checked = useSelector((change) => change.state.check);
  
  // console.log(checked);
  // const now = useSelector((change) => change.state.checked);

  const dispatch = useDispatch();
  // JSX rendering for the NewTask component
  return (
    // Container for the NewTask form with styling
    <div className="space-y-[20px] px-10 py-5 border-[2px] border-[#08334497] relative">
      {/* Input field for the task */}
      <div className="space-y-[5px]">
        <p>Task</p>
        {/* Label and input field for entering the task text */}
        <label htmlFor="task-input">
          <input
            className="border-[1px] border-[#083344] py-2 px-3 rounded-[4px]"
            type="text"
            value={task}
            placeholder="Add Task"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </label>
      </div>

      {/* Input field for day and time */}
      <div className="space-y-[5px]">
        <p>Day & Time</p>
        {/* Label and input field for entering the day and time text */}
        <label htmlFor="day&time-input">
          <input
            className="border-[1px] border-[#083344] py-2 px-3  rounded-[4px]"
            type="text"
            value={dayTime}
            placeholder="Add Day & Time"
            onChange={(e) => {
              setDayTime(e.target.value);
            }}
          />
        </label>
      </div>

      {/* Checkbox for setting a reminder */}
      <div className="flex gap-[50px] text-[18px] items-center">
        <p>Set Reminder</p>
        {/* Label and checkbox for setting a reminder */}
        <label htmlFor="reminder-checkbox">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => {
              dispatch(check(e.target.checked));
            }}
            className="w-4 h-4 checked:bg-black bg-gray-900 border-[#083344] rounded focus:ring-[#083344] focus:ring-2"
          />
        </label>
      </div>

      {/* Button to save the task */}
      <button
        className="bg-[#083344] text-cyan-50 text-center rounded-[4px] w-full p-3"
        onClick={() => {
          // Clear input fields and checkbox, display TaskAdded message temporarily
          setTask('');
          setDayTime('');
          // dispatch(check());
          // dispatch(now(checked));
          setAddedTask(<TaskAdded />);

          // After a delay, update the task list with the new task and hide the TaskAdded message
          setTimeout(() => {
            // dispatch(checked(radioBtn));
            // dis
            updatedTaskList(id, task, dayTime);
            setAddedTask('');
          }, 2500);
        }}
      >
        Save Task
      </button>

      {/* Display the added task message */}
      <div>{addedTask}</div>
    </div>
  );
}

// Export the NewTask component
export default NewTask;
