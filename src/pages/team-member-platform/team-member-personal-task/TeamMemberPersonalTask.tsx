import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Typography, Button } from "../../../design-system";
import { NoDataPlaceholder } from "../../components/NoDataPlaceHolder";
import noTasks from "../../../assets/illustrations/no-task.svg";

const PageBase = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;
const CreateTasksModalTitle = styled(Typography)`
    margin-bottom: var(--space-24);
`;
const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-16);
    margin-bottom: var(--space-24);
`;
const Buttons = styled.div`
    display: flex;
    gap: var(--space-10);
`;
const TeamMemberPersonalTasks = () => {
    const [tasks, setTasks] = useState<string[]>([]);
    const [showCreateTasksModal, setShowCreateTasksModal] =
        useState<boolean>(false);
    return (
        <PageBase>
            {!tasks.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTasks}
                    text="You don't have any tasks yet!"
                    buttonText="Add a Tasks"
                    buttonAction={() => setShowCreateTasksModal(true)}
                />
            ) : (
                <h1>Tasks</h1>
            )}
            <Modal show={showCreateTasksModal} position="center">
                <CreateTasksModalTitle variant="paragraphLG" weight="medium">
                    New Task
                </CreateTasksModalTitle>
                <Inputs>
                    <Input
                        placeholder="Task"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        type="textarea"
                        placeholder="Description"
                        value=""
                        onChange={() => {}}
                        shape="rounded"
                        size="lg"
                    />
                </Inputs>
                <Buttons>
                    <Button
                        color="secondary"
                        size="lg"
                        shape="rounded"
                        variant="outlined"
                        fullWidth
                        onClick={() => setShowCreateTasksModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button size="lg" shape="rounded" color="primary" fullWidth>
                        Save
                    </Button>
                </Buttons>
            </Modal>
        </PageBase>
    );
};
export { TeamMemberPersonalTasks };
