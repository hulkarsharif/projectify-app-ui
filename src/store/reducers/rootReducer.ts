import { userReducer } from "./User";
import { adminTasksReducer } from "./admin-tasks";
import { GlobalState, initialState } from "../state";
import { ActionType, Actions } from "../actions";
import { adminTeamMembersReducer } from "./admin-team-members";
import { projectsReducer } from "./admin-project";
import { teamMemberTasksReducer } from "./team-member-tasks";

const rootReducer = (state: GlobalState, action: ActionType): GlobalState => {
    if (action.type === Actions.RESET_STATE) {
        return initialState;
    }
    const newState: GlobalState = {
        user: userReducer(state.user, action),
        adminPersonalTasks: adminTasksReducer(state.adminPersonalTasks, action),
        teamMembers: adminTeamMembersReducer(state.teamMembers, action),
        projects: projectsReducer(state.projects, action),
        teamMemberPersonalTasks: teamMemberTasksReducer(
            state.teamMemberPersonalTasks,
            action
        )
    };

    return newState;
};

export { rootReducer };
