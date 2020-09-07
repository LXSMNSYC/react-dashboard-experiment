import createModel from '@lxsmnsyc/react-scoped-model';
import { TaskListItem } from './TaskListItemData';

export interface TaskList {
  id: string;
  title: string;
  items: TaskListItem[];
}

interface TaskListDataProps {
  index: string;
  data: TaskList;
}

const TaskListData = createModel<TaskListDataProps, TaskListDataProps>((
  (props) => props
));

export default TaskListData;
