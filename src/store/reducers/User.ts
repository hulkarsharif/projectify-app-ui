import { ActionType, Actions, InitUserAction } from "store/actions";
import { UserState } from "store/state";

export const userReducer = (
    state: UserState,
    action: ActionType
): UserState => {
    switch (action.type) {
        case Actions.INIT_USER: {
            const payload = action.payload as InitUserAction["payload"];
            return payload;
        }

        case Actions.RESET_STATE: {
            return null;
        }

        default:
            return state;
    }
};
