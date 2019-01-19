import React from 'react';
import FlatButton from '@material-ui/core/Button';
import CheckedIcon from '@material-ui/icons/Check';
import UnCheckedIcon from '@material-ui/icons/CheckBoxOutlineBlank';

export default {
  anchorOrigin: { vertical: 'top', horizontal: 'left' },
  autocompleteFilter: (searchText, text) => {
    if (!text || (typeof text !== 'string' && typeof text !== 'number')) return false;
    if (typeof searchText !== 'string' && typeof searchText !== 'number') return false;
    return (text + '').toLowerCase().includes(searchText.toLowerCase());
  },
  autocompleteStyle: {},
  canAutoPosition: true,
  checkPosition: '',
  checkedIcon: <CheckedIcon style={{ top: 'calc(50% - 12px)' }} />,
  children: [],
  disabled: false,
  elementHeight: 36,
  hintTextAutocomplete: 'Type something',
  infiniteLoadBeginEdgeOffset: undefined,
  keepSearchOnSelect: false,
  menuCloseButton: null,
  multiple: false,
  nb2show: 5,
  noMatchFound: 'No match found',
  noMatchFoundStyle: {},
  onAutoCompleteTyping: () => {},
  onChange: () => {},
  onInfiniteLoad: () => {},
  onMenuOpen: () => {},
  onSelect: () => {},
  openImmediately: false,
  popoverClassName: '',
  popoverWidth: 180,
  resetButton: <FlatButton label='reset' hoverColor='rgba(69, 90, 100, 0.1)' fullWidth />,
  selectAllButton: (
    <FlatButton
      label='select all'
      hoverColor='rgba(69, 90, 100, 0.1)'
      labelStyle={{ whiteSpace: 'nowrap' }}
      fullWidth
    />
  ),
  showAutocompleteThreshold: 10,
  unCheckedIcon: <UnCheckedIcon style={{ top: 'calc(50% - 12px)' }} />,
  value: null,
  withResetSelectAllButtons: false,
};
