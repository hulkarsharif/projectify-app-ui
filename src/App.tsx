import { Link } from "react-router-dom";
import { DatePickerV1 } from "./design-system";
import { useState } from "react";
import { Icon, Badge } from "./design-system";
import { OptionValue } from "./design-system/Select/types";

import styled from "styled-components";
import { KanbanCard, KanbanCardProps } from "./pages/components/KanbanCard";
import { Select } from "./design-system/Select";

// const App = () => {
//     const [date, setDate] = useState<Date>();
// };

const Form = styled.form`
    padding: 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem;

    font-size: 2rem;
    .fillFlag {
        fill: red;
    }
`;

const TaskDue = styled(Badge)`
    align-self: flex-end;
`;
const App = () => {
    const [date, setDate] = useState<Date>();
    const [value, setValue] = useState<OptionValue>("");
    return (
        <Form>
            <Link to="admin/sign-up">Admin Sign Up</Link>
            <Link to="admin/sign-in">Admin Sign in</Link>
            <Link to="admin/forgot-password">Forgot password</Link>
            <Link to="admin/reset-password">Reset Password</Link>
            <Link to="admin/platform">Admin Platform</Link>
            <Link to="team-member/create-password">
                Team Member Create Password
            </Link>
            <Link to="team-member/forgot-password">
                Team Member Forgot Password
            </Link>
            <Link to="team-member/sign-in">Team Member Sign in</Link>
            <Link to="team-member/platform/projects">Team Member Projects</Link>
            <Link to="team-member/platform/stories">Team Member Stories</Link>
            <Link to="team-member/platform/personal-tasks">
                Team Member Tasks
            </Link>
            <Link to="team-member/platform">Team Member Platform</Link>

            <div>
                <DatePickerV1
                    selected={date}
                    onChange={(date) => setDate(date)}
                    placeholder="Select Deadline"
                    shape="circle"
                    inputSize="lg"
                />
            </div>
            <div>
                <Badge label="Badge" color="gray" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="gray"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="gray"
                    icon={<Icon iconName="flag" />}
                />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="contained"
                    color="gray"
                    status
                />
            </div>
            <div>
                <Badge label="Badge" color="orange" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="orange"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="orange"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="blue" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="blue"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="blue"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="red" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="red"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="red"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="purple" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="purple"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="purple"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <div>
                <Badge label="Badge" color="green" />
                <Badge
                    label="Badge"
                    shape="circle"
                    variant="outlined"
                    color="green"
                />
                <Badge
                    label="Badge"
                    shape="rounded"
                    variant="contained"
                    color="green"
                    icon={<Icon iconName="flag" />}
                />
            </div>
            <Select
                options={[
                    { label: "Option1", value: "option1" },
                    { label: "Option2", value: "option2" },
                    { label: "Option3", value: "option3" },
                    { label: "Option4", value: "option4" },
                    { label: "Option5", value: "option5" },
                    { label: "Option6", value: "option6" }
                ]}
                headerPlaceholder="Select Option"
                onSelect={(option) => setValue(option.value)}
                size="md"
                shape="circle"
                value={value}
            />
        </Form>
    );
};

export { App };
