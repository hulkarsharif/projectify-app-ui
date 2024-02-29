import {
    Task,
    AdminUser,
    TeamMemberUser,
    TaskStatus,
    TaskUpdate,
    TeamMember,
    TeamMemberStatus,
    TeamMemberUpdate,
    Project,
    ProjectContributor,
    ProjectStatus,
    ProjectUpdate
} from "../../types";

export enum Actions {
    INIT_USER = "INIT_USER",
    RESET_STATE = "RESET_STATE",
    ADMIN_POPULATE_TASKS = "ADMIN_POPULATE_TASKS",
    ADMIN_ADD_TASK = "ADMIN_ADD_TASK",
    ADMIN_CHANGE_TASK_STATUS = "ADMIN_CHANGE_TASK_STATUS",
    ADMIN_UPDATE_TASK = "ADMIN_UPDATE_TASK",
    ADMIN_REMOVE_TASK = "ADMIN_REMOVE_TASK",

    ADMIN_ADD_TEAM_MEMBER = "ADMIN_ADD_TEAM_MEMBER",
    ADMIN_POPULATE_TEAM_MEMBERS = "ADMIN_POPULATE_TEAM_MEMBERS",
    ADMIN_REMOVE_TEAM_MEMBER = "ADMIN_REMOVE_TEAM_MEMBER",
    ADMIN_CHANGE_TEAM_MEMBER_STATUS = "ADMIN_CHANGE_TEAM_MEMBER_STATUS",
    ADMIN_DEACTIVATE_TEAM_MEMBER = "ADMIN_DEACTIVATE_TEAM_MEMBER",
    ADMIN_REACTIVATE_TEAM_MEMBER = "ADMIN_REACTIVATE_TEAM_MEMBER",
    ADMIN_UPDATE_TEAM_MEMBER = "ADMIN_UPDATE_TEAM_MEMBER",
    ADMIN_CHANGE_PASSWORD_TEAM_MEMBER = "ADMIN_CHANGE_PASSWORD_TEAM_MEMBER",

    ADD_PROJECT = "ADD_PROJECT",
    POPULATE_PROJECTS = "POPULATE_PROJECTS",
    CHANGE_PROJECT_STATUS = "CHANGE_PROJECT_STATUS",
    REMOVE_PROJECT = "REMOVE_PROJECT",
    REACTIVATE_PROJECT = "REACTIVATE_PROJECT",
    UPDATE_PROJECT = "UPDATE_PROJECT",
    PROJECT_ADD_CONTRIBUTOR = "PROJECT_ADD_CONTRIBUTOR"
}

export interface InitUserAction {
    type: Actions.INIT_USER;
    payload: AdminUser | TeamMemberUser;
}
export interface ResetStateAction {
    type: Actions.RESET_STATE;
}
export interface AdminPopulateTasksAction {
    type: Actions.ADMIN_POPULATE_TASKS;
    payload: Task[];
}

export interface AdminAddTaskAction {
    type: Actions.ADMIN_ADD_TASK;
    payload: Task;
}

export type AdminChangeTaskStatusAction = {
    type: Actions.ADMIN_CHANGE_TASK_STATUS;
    payload: {
        id: string;
        status: TaskStatus;
    };
};

export type AdminUpdateTaskAction = {
    type: Actions.ADMIN_UPDATE_TASK;
    payload: {
        id: string;
        data: TaskUpdate;
    };
};

export type AdminRemoveTaskAction = {
    type: Actions.ADMIN_REMOVE_TASK;
    payload: {
        id: string;
    };
};

export type AdminAddTeamMemberAction = {
    type: Actions.ADMIN_ADD_TEAM_MEMBER;
    payload: TeamMember;
};

export type AdminPopulateTeamMemberAction = {
    type: Actions.ADMIN_POPULATE_TEAM_MEMBERS;
    payload: TeamMember[];
};

export type AdminRemoveTeamMemberAction = {
    type: Actions.ADMIN_REMOVE_TEAM_MEMBER;
    payload: {
        id: string;
    };
};

export type AdminDeactivateTeamMemberAction = {
    type: Actions.ADMIN_DEACTIVATE_TEAM_MEMBER;
    payload: {
        id: string;
        status: TeamMemberStatus;
    };
};

export type AdminReactivateTeamMemberAction = {
    type: Actions.ADMIN_REACTIVATE_TEAM_MEMBER;
    payload: {
        id: string;
        status: TeamMemberStatus;
    };
};

export type AdminChangeTeamMemberStatusAction = {
    type: Actions.ADMIN_CHANGE_TEAM_MEMBER_STATUS;
    payload: {
        id: string;
        status: TeamMemberStatus;
    };
};
export type AdminUpdateTeamMemberAction = {
    type: Actions.ADMIN_UPDATE_TEAM_MEMBER;
    payload: {
        id: string;
        data: TeamMemberUpdate;
    };
};

export type AdminChangePasswordTeamMemberAction = {
    type: Actions.ADMIN_CHANGE_PASSWORD_TEAM_MEMBER;
    payload: {
        id: string;
        password: string;
    };
};

export type AddProjectAction = {
    type: Actions.ADD_PROJECT;
    payload: Project;
};

export type PopulateProjectsAction = {
    type: Actions.POPULATE_PROJECTS;
    payload: Project[];
};

export type ChangeProjectStatusAction = {
    type: Actions.CHANGE_PROJECT_STATUS;
    payload: {
        id: string;
        status: ProjectStatus;
    };
};
export type RemoveProjectAction = {
    type: Actions.REMOVE_PROJECT;
    payload: {
        id: string;
    };
};
export type ReactivateProjectAction = {
    type: Actions.REACTIVATE_PROJECT;
    payload: {
        id: string;
    };
};

export type UpdateProjectAction = {
    type: Actions.UPDATE_PROJECT;
    payload: {
        id: string;
        data: ProjectUpdate;
    };
};

export type AddContributorProjectAction = {
    type: Actions.PROJECT_ADD_CONTRIBUTOR;
    payload: ProjectContributor;
};
export type ActionType =
    | InitUserAction
    | ResetStateAction
    | AdminPopulateTasksAction
    | AdminAddTaskAction
    | AdminChangeTaskStatusAction
    | AdminUpdateTaskAction
    | AdminRemoveTaskAction
    | AdminAddTeamMemberAction
    | AdminPopulateTeamMemberAction
    | AdminRemoveTeamMemberAction
    | AdminDeactivateTeamMemberAction
    | AdminReactivateTeamMemberAction
    | AdminUpdateTeamMemberAction
    | AdminChangeTeamMemberStatusAction
    | AdminChangePasswordTeamMemberAction
    | AddProjectAction
    | PopulateProjectsAction
    | ChangeProjectStatusAction
    | RemoveProjectAction
    | ReactivateProjectAction
    | UpdateProjectAction
    | AddContributorProjectAction;
