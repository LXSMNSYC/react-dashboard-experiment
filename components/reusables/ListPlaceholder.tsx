import { styled } from 'styletron-react';

/**
 * Container for the lists.
 */
const ListPlaceholder = styled('div', {
  borderStyle: 'dashed',
  borderWidth: '5px',
  borderColor: '#546e7a',
  backgroundColor: '#455a64',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  gridRow: '1 / 2',
  gridColumn: '1 / 2',
});

export default ListPlaceholder;
