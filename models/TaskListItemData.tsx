import createModel from '@lxsmnsyc/react-scoped-model';

export interface TaskListItem {
  id: string;
  title: string;
}

const TaskListItemData = createModel<TaskListItem, TaskListItem>((
  (props) => props
));

export default TaskListItemData;
