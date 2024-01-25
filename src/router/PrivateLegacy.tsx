import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useLocalStorage, useStore } from "../hooks";
import { UserRole } from "../types";
import { admin } from "../api";
import { Actions, InitUserAction } from "../store";
import { useTheme } from "styled-components";

type ProtectedRouteProps = {
    component: React.ReactElement;
    userType: UserRole;
};

const Private: React.FC<ProtectedRouteProps> = ({ component, userType }) => {
    const { getItem, setItem } = useLocalStorage();
    const { dispatch } = useStore();
    const navigate = useNavigate();
    let isAuthTokenExists = getItem("authToken");

    useEffect(() => {
        if (isAuthTokenExists) {
            if (userType === UserRole.admin) {
                admin
                    .getMe()
                    .then((data): void => {
                        const action: InitUserAction = {
                            type: Actions.INIT_USER,
                            payload: data.data
                        };
                        dispatch(action);
                        setItem("userRole", data.data.role);
                    })
                    .catch((error: Error) => {
                        navigate("../");
                    });
            }
            if (userType === UserRole.teamMember) {
                console.log(userType, "ins-use-effect");
            }
        }
    }, []);

    console.log("I will print first");

    const userRole = getItem("userRole");
    const isAuthorized = userType === userRole;

    console.log(userRole, isAuthTokenExists);

    if (!isAuthTokenExists) {
        console.log("token does not exist");

        const navigateTo =
            userType === UserRole.admin
                ? "../admin/sign-in"
                : "../team-member/sign-in";
        return <Navigate to={navigateTo} />;
    } else if (isAuthorized) {
        console.log("is authorized false");

        const navigateTo =
            userRole === UserRole.admin
                ? "../admin/platform"
                : "../team-member/platform";
        return <Navigate to={navigateTo} />;
    }

    return <Navigate to="../" />;
};

export { Private };
