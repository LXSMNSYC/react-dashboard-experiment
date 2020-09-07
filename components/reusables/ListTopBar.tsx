import { styled } from 'styletron-react';

/**
 * Container for the top bar, used for titles
 */
const ListTopBar = styled('div', {
  // Dimensions of the board
  width: '100%',
  height: '32px',

  // margin fields
  marginTop: '8px',
  marginBottom: '8px',

  backgroundColor: '#607d8b',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  flexShrink: 0,
});

export default ListTopBar;
