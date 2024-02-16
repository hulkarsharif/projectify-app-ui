import { userReducer } from "./User";
import { adminTasksReducer } from "./admin-tasks";
import { GlobalState } from "../state";
import { ActionType } from "../actions";
import { teamMemberTasksReducer } from "./team-member-tasks";
import { adminTeamMembersReducer } from "./admin-team-members";

const rootReducer = (state: GlobalState, action: ActionType): GlobalState => {
    const newState: GlobalState = {
        user: userReducer(state.user, action),
        adminPersonalTasks: adminTasksReducer(state.adminPersonalTasks, action),
        teamMembers: adminTeamMembersReducer(state.teamMembers, action),
        teamMemberPersonalTasks: teamMemberTasksReducer(
            state.teamMemberPersonalTasks,
            action
        ),
        adminTeamMembers: adminTeamMembersReducer(
            state.adminTeamMembers,
            action
        )
    };

    return newState;
};

export { rootReducer };
