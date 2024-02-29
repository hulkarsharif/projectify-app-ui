import { useEffect, useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import {
    Typography,
    Modal,
    Input,
    DatePickerV1,
    Button,
    Icon
} from "../../../design-system";
import { useStore } from "../../../hooks";
import {
    Actions,
    ChangeProjectStatusAction,
    UpdateProjectAction,
    AdminChangePasswordTeamMemberAction
} from "../../../store";
import { projectsService } from "../../../api";
import { toDateObj, toIso8601 } from "../../../Utils";

type EditProjectModalProps = {
    show: boolean;
    closeModal: () => void;
    projectId: string;
};

const EditProjectModalTitle = styled(Typography)`
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
    const [startDate, setStartDate] = useState<Date | null>();
    const [endDate, setEndDate] = useState<Date | null>();

    const {
        dispatch,
        state: { projects }
    } = useStore();

    const [selectedProjectId, setSelectedProjectId] = useState("");
    useEffect(() => {
        const project = projects[projectId];
        if (project) {
            setName(project.name);
            setDescription(project.description);
            setStartDate(toDateObj(project.startDate));
            setEndDate(toDateObj(project.endDate));
        }
    }, [projectId]);

    const handleOnChangeName = (value: string) => {
        setName(value);
    };

    const handleOnChangeDescription = (value: string) => {
        setDescription(value);
    };

    const updateProject = () => {
        const updateData = {
            name,
            description,
            startDate: toIso8601(startDate!),
            endDate: toIso8601(endDate!)
        };

        projectsService
            .update(projectId, updateData)
            .then((_) => {
                const action: UpdateProjectAction = {
                    type: Actions.UPDATE_PROJECT,
                    payload: { data: updateData, id: projectId }
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
            <EditProjectModalTitle variant="paragraphLG" weight="medium">
                Edit Project
            </EditProjectModalTitle>
            <Inputs>
                <Input
                    type="text"
                    placeholder="Project Name"
                    value={name}
                    onChange={handleOnChangeName}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="text"
                    placeholder="Project Description"
                    value={description}
                    onChange={handleOnChangeDescription}
                    shape="rounded"
                    size="lg"
                />

                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Join Date"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Due Date"
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
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
                    onClick={() => {
                        updateProject();
                    }}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { EditProjectModal };
