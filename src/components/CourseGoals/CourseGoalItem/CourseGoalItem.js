import React from "react";

import "./CourseGoalItem.css";

const CourseGoalItem = (props) => {
  console.log(props);
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.goalText}
    </li>
  );
};

export default CourseGoalItem;
