import React from 'react';

// Models
import TaskListManager from '../../models/TaskListManager';

// Components
import BoardContent from '../reusables/BoardContent';
import TaskListContainer from './TaskListContainer';

const TaskListBoardContent = React.memo(() => {
  const list = TaskListManager.useSelector((state) => state.list);

  return (
    <BoardContent>
      {
        list.map((taskList) => (
          <TaskListContainer key={taskList.id} value={taskList} />
        ))
      }
    </BoardContent>
  );
});

export default TaskListBoardContent;
