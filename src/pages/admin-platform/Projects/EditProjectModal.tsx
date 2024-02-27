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
    UpdateProjectAction
} from "../../../store";
import { ProjectUpdateInput, projectsService } from "../../../api";
import { toDateObj, toIso8601 } from "../../../Utils";

type ProjectModalProps = {
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

const ActionLink = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: var(--space-24);
    align-items: center;
    cursor: pointer;
    .plus-icon {
        fill: var(--primary-500);
        height: 1.6rem;
        width: 1.6rem;
        margin-right: 0.6rem;
    }
    .update-password__link {
        color: var(--primary-500);
    }
`;
const EditProjectModal: React.FC<ProjectModalProps> = ({
    show,
    closeModal,
    projectId
}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState<Date | null>();
    const [endDate, setEndDate] = useState<Date | null>();
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const {
        dispatch,
        state: { projects }
    } = useStore();

    useEffect(() => {
        const project = projects[projectId];
        if (project) {
            setName(project.name);
            setDescription(project.description);
            setStartDate(toDateObj(project.startDate));
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
            .updateProject(projectId, updateData)
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
            <ModalTitle variant="paragraphLG" weight="medium">
                Edit Project
            </ModalTitle>
            <Inputs>
                <Input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleOnChangeName}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="text"
                    placeholder="Last Name"
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
