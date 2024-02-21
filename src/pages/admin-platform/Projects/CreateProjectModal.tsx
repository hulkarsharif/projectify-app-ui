import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import {
    Typography,
    Modal,
    Input,
    DatePickerV1,
    Button
} from "../../../design-system";
import { toIso8601 } from "../../../Utils";

import { adminProjectsService } from "../../../api";
import { useStore } from "../../../hooks";
import { Actions, AdminAddProjectAction } from "../../../store";

type ProjectModalProps = {
    show: boolean;
    closeModal: () => void;
};

const ProjectModalTitle = styled(Typography)`
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

const CreateProjectModal: React.FC<ProjectModalProps> = ({
    show,
    closeModal
}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState<Date>();
    const { dispatch } = useStore();

    const handleOnChangeName = (value: string) => {
        setName(value);
    };

    const handleOnChangeDescription = (value: string) => {
        setDescription(value);
    };

    const handleOnSelectDueDate = (value: Date) => {
        setDueDate(value);
    };

    const resetFields = () => {
        setName("");
        setDescription("");

        setDueDate(undefined);
    };

    const createProject = () => {
        const input = {
            name,
            description,
            dueDate: formatISO(dueDate!)
        };

        adminProjectsService
            .create(input)
            .then((data) => {
                const action: AdminAddProjectAction = {
                    type: Actions.ADMIN_ADD_PROJECT,
                    payload: data.data
                };
                dispatch(action);
                resetFields();
                closeModal();
                toast.success("Project has been successfully created.");
            })
            .catch((e) => {
                const err = e as Error;
                toast.error(err.message);
            });
    };

    return (
        <Modal show={show} position="center">
            <ProjectModalTitle variant="paragraphLG" weight="medium">
                New Task
            </ProjectModalTitle>
            <Inputs>
                <Input
                    placeholder="Project Name"
                    value={name}
                    onChange={handleOnChangeName}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="textarea"
                    placeholder="Project Description"
                    value={description}
                    onChange={handleOnChangeDescription}
                    shape="rounded"
                    size="lg"
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Due Date"
                    selected={dueDate}
                    onChange={handleOnSelectDueDate}
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
                >
                    Cancel
                </Button>
                <Button
                    size="lg"
                    shape="rounded"
                    color="primary"
                    fullWidth
                    onClick={createProject}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { CreateProjectModal };
