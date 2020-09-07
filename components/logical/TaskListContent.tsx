// React
import React from 'react';

// Models
import TaskListManager from '../../models/TaskListManager';

// Components
import ListContent from '../reusables/ListContent';
import ListBody from '../reusables/ListBody';
import ListBottomBar from '../reusables/ListBottomBar';
import TaskListTopBar from './TaskListTopBar';
import TaskListData from '../../models/TaskListData';

interface TaskListContentProps {
  getRect: () => DOMRect | undefined;
}

const TaskListContent = React.memo(({ getRect }: TaskListContentProps) => {
  const index = TaskListData.useSelector((state) => state.index);
  const [swap, currentID, setID] = TaskListManager.useSelectors((state) => [
    state.swap,
    state.id,
    state.setID,
  ]);

  const ref = React.useRef<HTMLDivElement | null>(null);

  const [transform, setTransform] = React.useState('translate3d(0px, 0px, 0px)');

  React.useEffect(() => {
    const { current } = ref;

    if (current) {
      const setTranslate = (xPos: number, yPos: number) => {
        setTransform(`translate3d(${xPos}px, ${yPos}px, 0)`);
      };

      let currentX: number;
      let currentY: number;
      let initialX: number;
      let initialY: number;
      let active = false;

      const drag = (e: MouseEvent) => {
        e.preventDefault();

        if (active) {
          currentX = e.clientX - initialX;
          currentY = e.clientY - initialY;

          if (document.elementFromPoint) {
            current.style.visibility = 'hidden';
            const hovered = document.elementFromPoint(e.clientX, e.clientY);
            current.style.visibility = 'visible';

            if (hovered) {
              hovered.dispatchEvent(new MouseEvent('mouseenter', {
                view: window,
                bubbles: true,
                cancelable: true,
              }));
            }
          }

          setTranslate(currentX, currentY);
        }
      };

      const onDragStart = (e: MouseEvent) => {
        const rect = getRect();

        if (rect) {
          initialX = e.clientX - rect.x;
          initialY = e.clientY - rect.y;

          setID(index);

          active = true;
        }
      };
      const onDragEnd = () => {
        if (active) {
          currentX = 0;
          currentY = 0;

          setTranslate(0, 0);
          setID(undefined);
          active = false;
        }
      };

      current.addEventListener('mousedown', onDragStart);
      current.addEventListener('mouseup', onDragEnd);
      current.addEventListener('mouseleave', onDragEnd);
      current.addEventListener('mousemove', drag);

      return () => {
        current.removeEventListener('mousemove', drag);
        current.removeEventListener('mousedown', onDragStart);
        current.removeEventListener('mouseleave', onDragEnd);
        current.removeEventListener('mouseup', onDragEnd);
      };
    }
    return undefined;
  }, [index, swap, getRect, setID]);

  React.useEffect(() => {
    const { current } = ref;

    if (current) {
      const onEnter = () => {
        swap(index);
      };

      current.addEventListener('mouseenter', onEnter);

      return () => {
        current.removeEventListener('mouseenter', onEnter);
      };
    }
    return undefined;
  }, [swap, index]);

  return (
    <ListContent selected={currentID === index} transform={transform} ref={ref}>
      <TaskListTopBar />
      <ListBody>
        Title
      </ListBody>
      <ListBottomBar>
        Title
      </ListBottomBar>
    </ListContent>
  );
});

export default TaskListContent;
