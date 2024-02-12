import { produce } from "immer";

import { TeamMemberState } from "../state";
import {
    ActionType,
    Actions,
    AdminPopulateTeamMemberAction,
    AdminAddTeamMemberAction
} from "../actions";

const adminTeamMemberReducer = produce(
    (draft: TeamMemberState, action: ActionType) => {
        switch (action.type) {
            case Actions.ADMIN_ADD_TEAM_MEMBER: {
                const payload =
                    action.payload as AdminAddTeamMemberAction["payload"];
                draft.push(payload);
                return draft;
            }
            case Actions.ADMIN_POPULATE_TEAM_MEMBER: {
                const payload =
                    action.payload as AdminPopulateTeamMemberAction["payload"];
                return payload;
            }
            default:
                return draft;
        }
    }
);

export { adminTeamMemberReducer };
