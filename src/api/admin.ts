import { AdminUser } from "types";

type SignUpInput = {
    firstName: string;
    lastName: string;
    preferredName?: string;
    email: string;
    password: string;
    company?: {
        name: string;
        position: string;
    };
};

type SignInInput = {
    email: string;
    password: string;
};

export type GetMeResponseType = {
    data: AdminUser;
};

class Admin {
    url: string;
    constructor() {
        this.url = `${process.env.REACT_APP_PROJECTIFY_API_URL}/admins`;
    }
    async signUp(input: SignUpInput) {
        try {
            const response = await fetch(`${this.url}/sign-up`, {
                method: "POST",
                headers: {
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

    async signIn(input: SignInInput): Promise<{ token: string }> {
        try {
            const response = await fetch(`${this.url}/login`, {
                method: "POST",
                headers: {
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

    async forgetPassword(email: string) {
        try {
            const response = await fetch(`${this.url}/forgot-password`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
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

    async resetPassword(
        password: string,
        passwordConfirm: string,
        token: string
    ) {
        try {
            const response = await fetch(`${this.url}/reset-password`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    password,
                    passwordConfirm
                })
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

    async getMe(): Promise<GetMeResponseType> {
        try {
            const rawAuthToken = localStorage.getItem("authToken");
            const authToken = rawAuthToken ? JSON.parse(rawAuthToken) : "";
            const response = await fetch(`${this.url}/me`, {
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

    async activateAccount(token: string) {
        try {
            const response = await fetch(
                `${this.url}/activate-account?activationToken=${token}`
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
}

export const adminService = new Admin();
