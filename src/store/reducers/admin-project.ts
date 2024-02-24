import { produce } from "immer";
import { ProjectState } from "../state";
import {
    ActionType,
    Actions,
    AddProjectAction,
    ArchiveProjectAction,
    PopulateProjectsAction,
    ReactivateProjectAction,
    RemoveProjectAction,
    UpdateProjectAction
} from "../actions";

const adminProjectsReducer = produce(
    (draft: ProjectState, action: ActionType) => {
        switch (action.type) {
            case Actions.ADD_PROJECT: {
                const payload = action.payload as AddProjectAction["payload"];
                draft.push(payload);
                return draft;
            }
            case Actions.POPULATE_PROJECTS: {
                const payload =
                    action.payload as PopulateProjectsAction["payload"];
                return payload;
            }
            case Actions.ARCHIVE_PROJECT: {
                const payload =
                    action.payload as ArchiveProjectAction["payload"];

                for (let i = 0; i < draft.length; i++) {
                    const project = draft[i];

                    if (project.id === payload.id) {
                        project.status = "ARCHIVED";
                        break;
                    }
                }
                return draft;
            }
            case Actions.REMOVE_PROJECT: {
                const payload =
                    action.payload as RemoveProjectAction["payload"];

                return draft.filter((project) => project.id !== payload.id);
            }
            case Actions.REACTIVATE_PROJECT: {
                const payload =
                    action.payload as ReactivateProjectAction["payload"];
                for (let i = 0; i < draft.length; i++) {
                    const project = draft[i];

                    if (project.id === payload.id) {
                        project.status = "ACTIVE";
                        break;
                    }
                }
                return draft;
            }
            case Actions.UPDATE_PROJECT: {
                const payload =
                    action.payload as UpdateProjectAction["payload"];

                for (let i = 0; i < draft.length; i++) {
                    const project = draft[i];

                    if (project.id === payload.id) {
                        draft[i] = payload;
                        break;
                    }
                }
                return draft;
            }
            default:
                return draft;
        }
    }
);

export { adminProjectsReducer };
