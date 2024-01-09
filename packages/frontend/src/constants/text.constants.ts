export const BUTTON_CONSTANTS = {
  ariaLabels: {
    edit: 'Edit todo',
    delete: 'Delete todo',
    add: 'Add new todo',
    close: 'Close add card mode',
    editBoard: 'Change board name',
  },
  names: {
    search: 'Search',
    addBoard: 'Create New Board',
    deleteBoard: 'Delete This Board',
    yes: 'Yes',
    no: 'No',
  },
} as const;

export const INPUT_CONSTANTS = {
  labels: {
    addInputTitle: 'Title',
    addInputDesk: 'Description',
    boardSelection: 'Choose board ID:',
  },
  values: {
    submit: 'Submit',
    changeBoardName: 'Change',
  },
  placeholders: {
    addBoard: 'New board name',
  },
};

export const CONTENT_CONSTANTS = {
  noCards: 'No cards yet',
  deleteCard: 'Are you sure about deleting the card?',
  boardId: 'Current board ID: ',
  boardName: 'Current board name: ',
};
