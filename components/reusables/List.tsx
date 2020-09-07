import { styled } from 'styletron-react';

/**
 * Container for the lists.
 */
const List = styled('div', {
  // Dimensions of the board
  width: '240px',
  height: '100%',

  marginRight: '8px',

  display: 'grid',
  gridTemplateRows: '1fr',
  gridTemplateColumns: '1fr',
});

export default List;
