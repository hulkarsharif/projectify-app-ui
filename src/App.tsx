import { Link } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
    font-size: 1.6rem;
    display: inline-flex;
    flex-direction: column;
    gap: 2rem;
`;

const App = () => {
    return (
        <Form>
            <h1>You are at Home </h1>
            <Link to="admin/sign-up">Admin Sign Up</Link>
            <Link to="admin/sign-in">Admin Sign in</Link>
            <Link to="admin/forgot-password">Forgot password</Link>
            <Link to="admin/reset-password">Reset Password</Link>
            <Link to="admin/platform">Admin Platform</Link>
            {/* <Link to="platform/projects">Projects</Link>
            <Link to="platform/stories">Stories</Link>
            <Link to="platform/team-members">Team Members</Link>
            <Link to="platform/personal-tasks">Personal Tasks</Link> */}

            <Link to="team-member/create-password">
                Team Member Create Password
            </Link>
            <Link to="team-member/login">Team Member Login</Link>
            <Link to="team-member/platform/projects">Team Member Projects</Link>
            <Link to="team-member/platform/stories">Team Member Stories</Link>
            <Link to="team-member/platform/personal-tasks">
                Team Member Tasks
            </Link>
        </Form>
    );
};

export { App };
