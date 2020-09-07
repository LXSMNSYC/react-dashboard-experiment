import React from 'react';

import Board from '../reusables/Board';
import BoardBar from '../reusables/BoardBar';
import TaskListBoardContent from './TaskListBoardContent';

// Models
import TaskListManager from '../../models/TaskListManager';
import { TaskList } from '../../models/TaskListData';

const INITIAL: TaskList[] = [
  {
    id: 'first',
    title: 'Hello',
    items: [],
  },
  {
    id: 'second',
    title: 'World',
    items: [],
  },
];

const TaskListBoard = React.memo(() => (
  <Board>
    <BoardBar>
      This is an example
    </BoardBar>
    <TaskListManager.Provider initialList={INITIAL}>
      <TaskListBoardContent />
    </TaskListManager.Provider>
  </Board>
));

export default TaskListBoard;
