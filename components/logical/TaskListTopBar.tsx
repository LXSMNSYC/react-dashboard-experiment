import React from 'react';

import TaskListData from '../../models/TaskListData';
import ListTopBar from '../reusables/ListTopBar';

const TaskListTopBar = React.memo(() => {
  const title = TaskListData.useSelector((state) => (
    state.data.title
  ));
  return (
    <ListTopBar>
      { title }
    </ListTopBar>
  );
});

export default TaskListTopBar;
