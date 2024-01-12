export const BUTTON_CONSTANTS = {
  ARIA_LABELS: {
    EDIT_TODO: 'Edit todo',
    DELETE_TODO: 'Delete todo',
    ADD_TODO: 'Add new todo',
    CLOSE_TODO: 'Close add card mode',
    EDIT_BOARD: 'Change board name',
  },
  NAMES: {
    SEARCH: 'Search',
    ADD_BOARD: 'Create New Board',
    DELETE_BOARD: 'Delete This Board',
    YES: 'Yes',
    NO: 'No',
  },
} as const;

export const INPUT_CONSTANTS = {
  LABELS: {
    ADD_INPUT_TITLE: 'Title',
    ADD_INPUT_DESC: 'Description',
    CHOOSE_BOARD_ID: 'Choose board ID:',
  },
  VALUES: {
    SUBMIT: 'Submit',
    CHANGE_BOARD_NAME: 'Change',
  },
  PLACEHOLDERS: {
    ADD_BOARD: 'New board name',
    SEARCH_BOARD: 'Type board ID here',
  },
};

export const CONTENT_CONSTANTS = {
  NO_CARDS: 'No cards yet',
  DELETE_CARD: 'Are you sure about deleting the card?',
  BOARD_ID: 'Current board ID: ',
  BOARD_NAME: 'Current board name: ',
};
