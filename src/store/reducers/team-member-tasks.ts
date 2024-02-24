import { produce } from "immer";

import {
    ActionType,
    Actions,
    AdminAddTaskAction,
    AdminChangeTaskStatusAction,
    AdminPopulateTasksAction,
    AdminRemoveTaskAction,
    AdminUpdateTaskAction
} from "../actions";
import { TaskState } from "../state";

const teamMemberTasksReducer = produce(
    (draft: TaskState, action: ActionType): TaskState => {
        switch (action.type) {
            case Actions.ADMIN_POPULATE_TASKS: {
                const payload =
                    action.payload as AdminPopulateTasksAction["payload"];
                return payload.reduce((acc: TaskState, teamMember) => {
                    acc[teamMember.id] = teamMember;
                    return acc;
                }, {});
            }
            case Actions.ADMIN_ADD_TASK: {
                const payload = action.payload as AdminAddTaskAction["payload"];
                draft[payload.id] = payload;
                return draft;
            }
            case Actions.ADMIN_CHANGE_TASK_STATUS: {
                const payload =
                    action.payload as AdminChangeTaskStatusAction["payload"];

                const task = draft[payload.id];

                if (task) {
                    task.status = payload.status;
                }

                return draft;
            }

            case Actions.ADMIN_UPDATE_TASK: {
                const payload =
                    action.payload as AdminUpdateTaskAction["payload"];
                const { id, data } = payload;
                const task = draft[id];
                if (task) {
                    task.title = data.title || task.title;
                    task.description = data.description || task.description;
                    task.due = data.due || task.due;
                    task.status = data.status || task.status;
                }
                return draft;
            }

            case Actions.ADMIN_REMOVE_TASK: {
                const payload =
                    action.payload as AdminRemoveTaskAction["payload"];

                delete draft[payload.id];
                return draft;
            }

            case Actions.RESET_STATE: {
                return {};
            }
            default:
                return draft;
        }
    }
);

export { teamMemberTasksReducer };
