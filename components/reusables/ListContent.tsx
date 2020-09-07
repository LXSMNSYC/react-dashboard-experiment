import { styled } from 'styletron-react';

interface ListContentProps {
  transform: string;
  selected: boolean;
}

/**
 * Container for the lists.
 */
const ListContent = styled('div', ({ transform, selected }: ListContentProps) => ({
  backgroundColor: '#546e7a',

  display: 'flex',
  flexDirection: 'column',

  transform,

  gridRow: '1 / 2',
  gridColumn: '1 / 2',

  zIndex: selected ? 1 : 'initial',
}));

export default ListContent;
