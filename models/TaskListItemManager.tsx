import createModel from '@lxsmnsyc/react-scoped-model';

import { TaskListItem } from './TaskListItemData';

import useSwappableList from '../utils/hooks/useSwappableList';

interface TaskListItemManagerProps {
  initialList: TaskListItem[];
}

const TaskListItemManager = createModel(({ initialList }: TaskListItemManagerProps) => (
  useSwappableList(initialList)
));

export default TaskListItemManager;
