import React, { Dispatch, SetStateAction } from 'react';

interface WithId {
  id: string;
}

type SwapAction = Dispatch<SetStateAction<string | undefined>>;

interface SwappableListInterface<Data extends WithId> {
  list: Data[];
  id?: string;
  swap: SwapAction;
  setID: (index: string | undefined) => void;
}

export default function useSwappableList<Data extends WithId>(
  initialList: Data[],
): SwappableListInterface<Data> {
  const [list, setList] = React.useState(initialList);
  const [id, setID] = React.useState<string | undefined>();

  const swap = React.useCallback<SwapAction>((action) => {
    setID((currentID) => {
      const newID = typeof action === 'function'
        ? action(currentID)
        : action;

      if (newID === currentID) {
        return currentID;
      }

      if (newID != null && currentID != null) {
        setList((currentList) => {
          const newList = Array.from(currentList);

          let baseIndex: number | undefined;
          let targetIndex: number | undefined;
          let baseItem: Data | undefined;
          let targetItem: Data | undefined;

          for (let index = 0; index < newList.length; index += 1) {
            const item = newList[index];
            if (item.id === currentID) {
              targetIndex = index;
              targetItem = item;
            }
            if (item.id === newID) {
              baseIndex = index;
              baseItem = item;
            }
          }

          if (baseIndex != null && targetItem) {
            newList[baseIndex] = targetItem;
          }
          if (targetIndex != null && baseItem) {
            newList[targetIndex] = baseItem;
          }

          return newList;
        });

        return currentID;
      }

      return currentID;
    });
  }, []);

  return {
    list,
    id,
    swap,
    setID,
  };
}
