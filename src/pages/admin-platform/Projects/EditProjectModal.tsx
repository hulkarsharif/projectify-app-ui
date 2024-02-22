import { useEffect, useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import {
    Typography,
    Modal,
    Input,
    DatePickerV1,
    Button
} from "../../../design-system";
import { useStore } from "../../../hooks";
import { ProjectStatus } from "../../../types";
import { Actions, AdminUpdateProjectAction } from "../../../store";
import { ProjectUpdateInput, adminProjectsService } from "../../../api";
import { toDateObj, toIso8601 } from "../../../Utils";
import { formatISO } from "date-fns";
import { parseISO } from "date-fns";

type EditProjectModalProps = {
    show: boolean;
    closeModal: () => void;
    projectId: string;
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
    gap: var(--space-10);
`;

const EditProjectModal: React.FC<EditProjectModalProps> = ({
    show,
    closeModal,
    projectId
}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState<Date>();
    const [status, setStatus] = useState<ProjectStatus>();
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);

    const {
        dispatch,
        state: { projects }
    } = useStore();

    useEffect(() => {
        const project = projects[projectId];
        if (project) {
            setName(project.name);
            setDescription(project.description);
            setStatus(project.status);
            setDueDate(parseISO(project.dueDate));
        }
    }, [projectId]);

    const updateProject = () => {
        const updatedProject = {
            name,
            description,
            dueDate: formatISO(dueDate!)
        };

        adminProjectsService
            .updateProject(projectId, updateProject)
            .then((_) => {
                const action: AdminUpdateProjectAction = {
                    type: Actions.ADMIN_UPDATE_PROJECT,
                    payload: {
                        id: projectId,
                        status: status!,
                        name: name,
                        description: description,
                        dueDate: formatISO(dueDate!)
                    }
                };
                dispatch(action);
                closeModal();
                toast.success("Project has been successfully updated");
            })
            .catch((e) => {
                const err = e as Error;
                toast.error(err.message);
            });
    };

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraphLG" weight="medium">
                Update Member
            </ModalTitle>
            <Inputs>
                <Input
                    type="text"
                    value={name}
                    onChange={(value) => setName(value)}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    labelText="Project Description"
                    value={description}
                    onChange={(value) => setDescription(value)}
                    shape="rounded"
                    size="lg"
                />

                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="select Due Date"
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}
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
                    onClick={updateProject}
                    disabled={isFormSubmitting}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { EditProjectModal };
