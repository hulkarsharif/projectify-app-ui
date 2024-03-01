import { produce } from "immer";
import { ProjectState } from "../state";
import {
    ActionType,
    Actions,
    AddProjectAction,
    ChangeProjectStatusAction,
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
                draft[payload.id] = payload;
                return draft;
            }
            case Actions.POPULATE_PROJECTS: {
                const payload =
                    action.payload as PopulateProjectsAction["payload"];
                return payload.reduce((acc: ProjectState, project) => {
                    acc[project.id] = project;
                    return acc;
                }, {});
            }

            case Actions.CHANGE_PROJECT_STATUS: {
                const payload =
                    action.payload as ChangeProjectStatusAction["payload"];
                const project = draft[payload.id];
                if (project) {
                    project.status = payload.status;
                }

                return draft;
            }

            case Actions.UPDATE_PROJECT: {
                const payload =
                    action.payload as UpdateProjectAction["payload"];
                draft[payload.id] = {
                    ...draft[payload.id],
                    ...payload.data
                };
                return draft;
            }
        }
    }
);

export { adminProjectsReducer };
