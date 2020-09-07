import { styled } from 'styletron-react';

/**
 * Container for the top bar, used for titles
 */
const BoardBar = styled('div', {
  // margin fields
  marginTop: '8px',
  marginLeft: '8px',
  marginRight: '8px',

  // display type
  display: 'flex',

  // flex properties
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',

  backgroundColor: '#37474f',
});

export default BoardBar;
