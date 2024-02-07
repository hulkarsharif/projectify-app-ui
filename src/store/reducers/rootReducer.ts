import { ActionType } from "../actions";
import { GlobalState } from "../state";
import { userReducer } from "./UserReducer";
import { adminTasksReducer } from "./adminTasksReducer";

const rootReducer = (state: GlobalState, action: ActionType): GlobalState => {
    const newState: GlobalState = {
        user: userReducer(state.user, action),
        adminPersonalTasks: adminTasksReducer(state.adminPersonalTasks, action)
    };

    return newState;
};
export { rootReducer };
