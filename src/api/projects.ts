import {
    ContributorStatus,
    ProjectContributorBase,
    Project,
    ProjectContributor,
    ProjectStatus,
    ProjectUpdate,
    ProjectWithContributors
} from "../types";

type CreateInput = Omit<Project, "id" | "status" | "progress">;

type CreateAPIResponse = {
    data: Project;
};

type GetAllAPIResponse {
    data: ProjectWithContributors[];
}

type GetContributorsAPIResponse = {
    data: {
        assignedContributors: ProjectContributor[];
        notAssignedContributors: ProjectContributorBase[];
    };
};

type AddContributorAPIResponse = {
    data: {
        status: ContributorStatus;
        teamMemberId: string;
        joinedAt: string;
    };
};





class ProjectsService {
    url: string;
    constructor() {
        this.url = `${
            process.env.NODE_ENV === "development"
                ? process.env.REACT_APP_PROJECTIFY_API_URL_LOCAL
                : process.env.REACT_APP_PROJECTIFY_API_URL
        }/projects`;
    }

    async create(input: CreateInput): Promise<CreateAPIResponse> {
        try {
            const rawAuthToken = localStorage.getItem("authToken");
            const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";
            const response = await fetch(`${this.url}/`, {
                method: "POST",
                headers: {
                    authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            return response.json();
        } catch (error) {
            throw error;
        }
    }

    async getAll(): Promise<GetAllAPIResponse> {
        try {
            const rawAuthToken = localStorage.getItem("authToken");
            const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";
            const response = await fetch(`${this.url}/`, {
                headers: {
                    authorization: `Bearer ${authToken}`
                }
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            return response.json();
        } catch (error) {
            throw error;
        }
    }

    async changeStatus(projectId: string, status: ProjectStatus) {
        try {
            const rawAuthToken = localStorage.getItem("authToken");
            const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";

            const response = await fetch(
                `${this.url}/${projectId}/change-status`,
                {
                    method: "PATCH",
                    headers: {
                        authorization: `Bearer ${authToken}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ status })
                }
            );

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
        } catch (error) {
            throw error;
        }
    }

    async delete(projectId: string) {
        const rawAuthToken = localStorage.getItem("authToken");
        const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";
        try {
            const response = await fetch(`${this.url}/${projectId}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${authToken}`
                }
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
        } catch (error) {
            throw error;
        }
    }

    async reactivate(projectId: string) {
        const rawAuthToken = localStorage.getItem("authToken");
        const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";
        try {
            const response = await fetch(
                `${this.url}/${projectId}/reactivate`,
                {
                    method: "PATCH",
                    headers: {
                        authorization: `Bearer ${authToken}`
                    }
                }
            );

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
        } catch (error) {
            throw error;
        }
    }

    async update(projectId: string, input: ProjectUpdate) {
        try {
            const rawAuthToken = localStorage.getItem("authToken");
            const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";
            const response = await fetch(`${this.url}/${projectId}`, {
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
        } catch (error) {
            throw error;
        }
    }

    private async addContributor(
        teamMemberId: string,
        projectId: string
    ): Promise<AddContributorAPIResponse> {
        try {
            const rawAuthToken = localStorage.getItem("authToken");
            const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";

            const response = await fetch(
                `${this.url}/${projectId}/contributors/add`,
                {
                    method: "POST",
                    headers: {
                        authorization: `Bearer ${authToken}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ teamMemberId }),
                }
            );
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            return response.json();
        } catch (error) {
            throw error;
        }
    }

    async addContributors(teamMemberIds: string[], projectId: string) {
        try {
            const promises = teamMemberIds.map((teamMemberId) =>
                this.addContributor(teamMemberId, projectId)
            );

            const results = await Promise.allSettled(promises);

            const fulfilledResults: AddContributorAPIResponse["data"][] = [];

            results.forEach((result) => {
                if (result.status === "fulfilled") {
                    fulfilledResults.push(result.value.data);
                }
            });

            return fulfilledResults;
        } catch (error) {
            throw error;
        }
    }
}

export const projectsService = new ProjectsService();
