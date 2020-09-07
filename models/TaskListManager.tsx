import createModel from '@lxsmnsyc/react-scoped-model';

import { TaskList } from './TaskListData';

import useSwappableList from '../utils/hooks/useSwappableList';

interface TaskListManagerProps {
  initialList?: TaskList[];
}

const TaskListManager = createModel(({ initialList }: TaskListManagerProps) => (
  useSwappableList(initialList ?? [])
));

export default TaskListManager;
