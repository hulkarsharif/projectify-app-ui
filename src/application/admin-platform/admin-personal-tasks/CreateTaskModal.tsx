import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import { Typography, Modal, Input, DatePickerV1, Button } from "design-system";

import { adminTasksService } from "api";
import { useStore } from "../../../hooks";
import { Actions, AdminAddTaskAction } from "../../../store";
import { toIso8601 } from "../../../Utils";

type CreateTaskModalProps = {
    show: boolean;
    closeModal: () => void;
};

const ModalTitle = styled(Typography)`
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
    gap: var(--space-12);
`;

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
    show,
    closeModal
}) => {
    const [taskDue, setTaskDue] = useState<Date | null>();
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    const { dispatch } = useStore();

    const createTask = () => {
        setIsFormSubmitting(true);

        const input = {
            title: taskTitle,
            description: taskDescription,
            due: toIso8601(taskDue!)
        };

        adminTasksService
            .createTask(input)
            .then((data) => {
                const action: AdminAddTaskAction = {
                    type: Actions.ADMIN_ADD_TASK,
                    payload: data.data
                };
                dispatch(action);
                setIsFormSubmitting(false);
                closeCreateTaskModal();
                toast.success("Task has been successfully created!");
            })
            .catch((e) => {
                setIsFormSubmitting(false);
                const error = e as Error;
                toast.error(error.message);
            });
    };

    const closeCreateTaskModal = () => {
        setTaskTitle("");
        setTaskDescription("");
        setTaskDue(undefined);
        closeModal();
    };

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraph-lg" weight="medium">
                New Task
            </ModalTitle>
            <Inputs>
                <Input
                    placeholder="Task Name"
                    value={taskTitle}
                    onChange={(value) => setTaskTitle(value)}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="textarea"
                    placeholder="Task Description"
                    value={taskDescription}
                    onChange={(value) => {
                        setTaskDescription(value);
                    }}
                    shape="rounded"
                    size="lg"
                    clearable
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Due Date"
                    selected={taskDue}
                    onChange={(date) => setTaskDue(date)}
                />
            </Inputs>
            <Buttons>
                <Button
                    color="secondary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={closeModal}
                    disabled={isFormSubmitting}
                >
                    Cancel
                </Button>
                <Button
                    size="lg"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    onClick={createTask}
                    disabled={isFormSubmitting}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { CreateTaskModal };
