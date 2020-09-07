import { styled } from 'styletron-react';

/**
 * Container of the whole app
 */
const Board = styled('div', {
  // Dimensions of the board
  width: '100vw',
  height: '100vh',

  // display type
  display: 'grid',
  gridTemplateRows: '48px auto',
  gridTemplateColumns: '1fr',

  backgroundColor: '#263238',
});

export default Board;
