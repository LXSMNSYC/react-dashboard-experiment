import { styled } from 'styletron-react';

/**
 * Container for the lists.
 */
const BoardContent = styled('div', {
  // margin fields
  marginTop: '8px',
  marginBottom: '8px',
  marginLeft: '8px',
  marginRight: '8px',

  // display type
  display: 'flex',

  // flex properties
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',

  backgroundColor: '#37474f',

  overflowY: 'hidden',
  overflowX: 'scroll',
});

export default BoardContent;
