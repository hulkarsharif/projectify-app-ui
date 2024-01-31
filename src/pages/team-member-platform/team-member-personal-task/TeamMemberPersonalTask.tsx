import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Typography, Button } from "../../../design-system";
import { NoDataPlaceholder } from "../../components/NoDataPlaceHolder";
import noTasks from "../../../assets/illustrations/no-task.svg";
import { teamMemberPersonalTasks } from "../../../api";
import { useLocalStorage } from "../../../hooks";
import toast from "react-hot-toast";

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
    const [personalTasks, setPersonalTasks] = useState<string[]>([]);
    const [showCreateTasksModal, setShowCreateTasksModal] =
        useState<boolean>(false);

    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [due, setDue] = useState<string>("");

    const [isformSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const { setItem } = useLocalStorage();

    const handleOnChangeTitle = (value: string) => {
        setTitle(value);
    };

    const handleOnChangeDescription = (value: string) => {
        setDescription(value);
    };

    const handleOnChangeDue = (value: string) => {
        setDue(value);
    };
    const isFormSubmittable = title && description && due;

    const createPersonalTask = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const response = await teamMemberPersonalTasks.createTask({
                title,
                description,
                due
            });

            setIsFormSubmitting(false);
            setTitle("");
            setDescription("");
            setDue("");
            setShowCreateTasksModal(false);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);

                toast.error(error.message);
            }
        }
    };

    return (
        <PageBase>
            {!personalTasks.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTasks}
                    text="You don't have any task yet!"
                    buttonText="Add a Task"
                    buttonAction={() => setShowCreateTasksModal(true)}
                />
            ) : (
                <h1>Personal Tasks</h1>
            )}
            <form onSubmit={createPersonalTask}>
                <Modal show={showCreateTasksModal} position="center">
                    <CreateTasksModalTitle
                        variant="paragraphLG"
                        weight="medium"
                    >
                        New Task
                    </CreateTasksModalTitle>
                    <Inputs>
                        <Input
                            placeholder="Title"
                            value={title}
                            onChange={handleOnChangeTitle}
                            shape="rounded"
                            size="lg"
                        />
                        <Input
                            type="textarea"
                            placeholder="Description"
                            value={description}
                            onChange={handleOnChangeDescription}
                            shape="rounded"
                            size="lg"
                        />
                        <Input
                            placeholder="Due Date"
                            value={due}
                            onChange={handleOnChangeDue}
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
                        <Button
                            size="lg"
                            shape="rounded"
                            color="primary"
                            fullWidth
                        >
                            Save
                        </Button>
                    </Buttons>
                </Modal>
            </form>
        </PageBase>
    );
};
export { TeamMemberPersonalTasks };
