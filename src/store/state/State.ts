import { AdminUser, Task, TeamMember, TeamMemberUser } from "../../types";

export type UserState = AdminUser | TeamMemberUser | null;
export type TaskState = Task[];
export type TeamMemberState = { [teamMemberId: string]: TeamMember };

export interface GlobalState {
    user: UserState;
    adminPersonalTasks: TaskState;
    adminTeamMembers: TeamMemberState;
    teamMemberPersonalTasks: Task[];
    teamMembers: TeamMemberState;
}

export const initialState: GlobalState = {
    user: null,
    adminPersonalTasks: [],
    adminTeamMembers: {},
    teamMemberPersonalTasks: [],
    teamMembers: {}
};
