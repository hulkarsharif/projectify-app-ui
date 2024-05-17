import { useState, useEffect } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import {
    Typography,
    Modal,
    Input,
    DatePickerV1,
    Button,
    Select,
    Option,
    Label
} from "../../../design-system";
import {
    AdminTeamMemberActions,
    ProjectWithContributors,
    TeamMember
} from "../../../types";
import { projectService, teamMemberService } from "../../../api";
import { storyService } from "../../../api";

import { useStore } from "../../../hooks";
import { toIso8601 } from "../../../Utils";
import {
    Actions,
    AddStoryAction,
    AdminAddTeamMemberAction,
    AdminChangePasswordTeamMemberAction,
    AdminPopulateTasksAction,
    AdminPopulateTeamMemberAction,
    TeamMemberState
} from "../../../store";

type StoryModalProps = {
    show: boolean;
    closeModal: () => void;
    // selectProject: string;
    // setSelectProject: (option: Option) => void;
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

const CreateStoryModal: React.FC<StoryModalProps> = ({ show, closeModal }) => {
    const [projectId, setProjectId] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [storyPoint, setStoryPoint] = useState<string>("");
    const [due, setDue] = useState<Date | null>();
    // const [assigneeId, setAssigneeId] = useState<string>(""); // Initialize with null
    const [teamMemberId, setTeamMemberId] = useState<string>("");

    const [isTeamMembersFetching, setIsTeamMembersFetching] = useState(true);

    type OptionValue = string | number;

    const [selectedProject, setSelectedProject] = useState<
        OptionValue | undefined
    >(undefined);
    // const [selectedAssignee, setSelectedAssignee] = useState<
    //     OptionValue | undefined
    // >(undefined);
    const [selectedTeamMember, setSelectedTeamMember] = useState<
        OptionValue | undefined
    >(undefined);

    const [projectOptions, setProjectOptions] = useState<Option[]>([]);
    const [assigneeOptions, setAssigneeOptions] = useState<Option[]>([]);
    const [isProjectsFetching, setIsProjectsFetching] = useState(true);

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const { dispatch } = useStore();

    const handleOnChangeTitle = (value: string) => {
        setTitle(value);
    };

    const handleOnChangeDescription = (value: string) => {
        setDescription(value);
    };

    const handleOnChangeStoryPoint = (value: string) => {
        setStoryPoint(value);
    };

    const isFormSubmittable = title && description && storyPoint && due;

    const clearFields = () => {
        setTitle("");
        setDescription("");
        setStoryPoint("");
        setDue(null);
        setProjectId("");
        setTeamMemberId("");
        // setAssigneeId("");
    };

    const cancel = () => {
        clearFields();
        closeModal();
    };
    const createStory = () => {
        const input = {
            projectId,
            title,
            description,
            storyPoint,
            due: toIso8601(due!),
            teamMemberId
            // assigneeId
        };
        try {
            storyService
                .create(input)
                .then((data) => {
                    const action: AddStoryAction = {
                        type: Actions.ADMIN_ADD_STORY,
                        payload: data.data
                    };
                    dispatch(action);
                    clearFields();
                    closeModal();
                    toast.success("Story has been successfully created");
                })
                .catch((e) => {
                    const err = e as Error;
                    toast.error(err.message);
                });
        } catch (error) {}
    };

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await projectService.getAll();
                const projects: ProjectWithContributors[] = response.data;

                const options = projects.map((project) => ({
                    label: project.name,
                    value: project.id
                }));
                setProjectOptions(options);
                setIsProjectsFetching(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setIsProjectsFetching(false);
            }
        };

        fetchProjects();
    }, []);

    useEffect(() => {
        const fetchteamMemberService = async () => {
            try {
                const response = await teamMemberService.getAll();
                const teamMembers: TeamMember[] = response.data; // Fix type mismatch

                const options = teamMembers.map((teamMember) => ({
                    label: `${teamMember.firstName} ${teamMember.lastName}`,
                    value: teamMember.id
                }));

                setAssigneeOptions(options);
                setIsTeamMembersFetching(false);
            } catch (error) {
                console.error("Error fetching projects:", error);
                setIsProjectsFetching(false);
            }
        };
        fetchteamMemberService();
    }, []);

    if (isTeamMembersFetching) return null;

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraphLG" weight="medium">
                New Story
            </ModalTitle>
            <Inputs>
                <Select
                    value={selectedProject}
                    onSelect={(option) => setSelectedProject(option?.value)}
                    options={projectOptions}
                    shape="rounded"
                    size="md"
                    headerPlaceholder="Project"
                    className="status-filter"
                />
                <Input
                    type="text"
                    placeholder="Story Title"
                    value={title} // Corrected
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
                    type="text"
                    placeholder="Story Point"
                    value={storyPoint}
                    onChange={handleOnChangeStoryPoint} // Added
                    shape="rounded"
                    size="lg"
                />
                <DatePickerV1
                    inputSize="lg"
                    shape="rounded"
                    placeholder="Due Date"
                    selected={due}
                    onChange={(date) => setDue(date)}
                />
                <Select
                    value={selectedTeamMember}
                    onSelect={(option) => setSelectedTeamMember(option?.value)}
                    options={assigneeOptions}
                    shape="rounded"
                    size="md"
                    headerPlaceholder="Assignee"
                    className="status-filter"
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
                    onClick={createStory}
                >
                    Save
                </Button>
            </Buttons>
        </Modal>
    );
};

export { CreateStoryModal };
