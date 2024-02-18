import { produce } from "immer";

import {
    ActionType,
    Actions,
    AddTaskAction,
    ChangeTaskStatusAction,
    PopulateTasksAction,
    RemoveTaskAction,
    UpdateTaskAction
} from "../actions";
import { TaskState } from "../state";

const teamMemberTasksReducer = produce(
    (draft: TaskState, action: ActionType): TaskState => {
        switch (action.type) {
            case Actions.POPULATE_TASKS: {
                const payload =
                    action.payload as PopulateTasksAction["payload"];
                return payload.reduce((acc: TaskState, teamMember) => {
                    acc[teamMember.id] = teamMember;
                    return acc;
                }, {});
            }
            case Actions.ADD_TASK: {
                const payload = action.payload as AddTaskAction["payload"];
                draft[payload.id] = payload;
                return draft;
            }
            case Actions.CHANGE_TASK_STATUS: {
                const payload =
                    action.payload as ChangeTaskStatusAction["payload"];

                const task = draft[payload.id];

                if (task) {
                    task.status = payload.status;
                }

                return draft;
            }

            case Actions.UPDATE_TASK: {
                const payload = action.payload as UpdateTaskAction["payload"];
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

            case Actions.REMOVE_TASK: {
                const payload = action.payload as RemoveTaskAction["payload"];

                delete draft[payload.id];
                return draft;
            }

            case Actions.RESET_STATE: {
                return [];
            }
            default:
                return draft;
        }
    }
);

export { teamMemberTasksReducer };
