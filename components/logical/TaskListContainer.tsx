import React from 'react';

// Components
import List from '../reusables/List';
import TaskListPlaceholder from './TaskListPlaceholder';
import TaskListContent from './TaskListContent';

// Models
import TaskListData, { TaskList } from '../../models/TaskListData';

interface TaskListContainerProps {
  value: TaskList;
}

export default function TaskListContainer({ value }: TaskListContainerProps): JSX.Element {
  const ref = React.useRef<HTMLDivElement | null>(null);

  const getRect = React.useCallback(() => {
    const { current } = ref;

    if (current) {
      return current.getBoundingClientRect();
    }
    return undefined;
  }, []);

  return (
    <TaskListData.Provider
      index={value.id}
      data={value}
    >
      <List ref={ref}>
        <TaskListPlaceholder />
        <TaskListContent getRect={getRect} />
      </List>
    </TaskListData.Provider>
  );
}
