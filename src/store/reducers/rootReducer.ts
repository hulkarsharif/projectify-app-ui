import { userReducer } from "./User";
import { adminTasksReducer } from "./admin-tasks";
import { GlobalState, initialState } from "store/state";
import { ActionType, Actions } from "store/actions";
import { adminTeamMembersReducer } from "./admin-team-members";
import { projectsReducer } from "./admin-project";
import { teamMemberTasksReducer } from "./team-member-tasks";
import { storiesReducer } from "./stories";

const rootReducer = (state: GlobalState, action: ActionType): GlobalState => {
    if (action.type === Actions.RESET_STATE) {
        return initialState;
    }
    const newState: GlobalState = {
        user: userReducer(state.user, action),
        adminPersonalTasks: adminTasksReducer(state.adminPersonalTasks, action),
        teamMembers: adminTeamMembersReducer(state.teamMembers, action),
        teamMemberPersonalTasks: teamMemberTasksReducer(
            state.teamMemberPersonalTasks,
            action
        ),
        projects: projectsReducer(state.projects, action),
        stories: storiesReducer(state.stories, action)
    };

    return newState;
};

export { rootReducer };
