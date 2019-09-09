import produce from 'immer';

const INITIAL_STATE = {
  users: [],
};

export default function contacts(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@contacts/GOT_USERS':
      return produce(state, draft => {
        draft.users = action.users;
      });
    case '@contacts/GOT_NEW_USER':
      return produce(state, draft => {
        const { user } = action;
        const userIndex = draft.users.findIndex(p => p.id === user.id);

        if (userIndex < 0) {
          draft.users.push(user);
        }
      });
    default:
      return produce(state, draft => {
        return draft;
      });
  }
}
