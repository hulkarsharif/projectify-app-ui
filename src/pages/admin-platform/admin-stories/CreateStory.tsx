import { useState } from "react";
import styled from "styled-components";
import toast from "react-hot-toast";
import {
    Typography,
    Modal,
    Input,
    DatePickerV1,
    Button,
    Select,
    Option
} from "../../../design-system";

import { useStore } from "../../../hooks";

type StoryModalProps = {
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
    gap: var(--space-10);
`;

const CreateStory: React.FC<StoryModalProps> = ({ show, closeModal }) => {
    const [project, setProject] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [storyPoint, setStoryPoint] = useState("");
    const [dueDate, setDueDate] = useState<Date | null>();
    const [assignee, setAssignee] = useState<Option>(); // Initialize with null

    const { dispatch } = useStore();

    const handleOnChangeProject = (value: string) => {
        setProject(value);
    };

    const handleOnChangeTitle = (value: string) => {
        setTitle(value);
    };

    const handleOnChangeDescription = (value: string) => {
        setDescription(value);
    };

    const handleOnChangeStoryPoint = (value: string) => {
        // Add this function
        setStoryPoint(value);
    };

    const handleOnSelectAssignee = (option: Option) => {
        setAssignee(option);
    };

    const resetFields = () => {
        setProject("");
        setTitle("");
        setDescription("");
        setStoryPoint("");
        setDueDate(undefined);
        setAssignee(undefined);
    };

    const createStory = () => {
        const input = {
            project,
            title,
            description,
            storyPoint,
            dueDate,
            assignee
        };
        // Handle creating story here
    };

    return (
        <Modal show={show} position="center">
            <ModalTitle variant="paragraphLG" weight="medium">
                New Story
            </ModalTitle>
            <Inputs>
                <Input
                    type="text"
                    placeholder="Project"
                    value={project} // Corrected
                    onChange={handleOnChangeProject}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="text"
                    placeholder="Title"
                    value={title} // Corrected
                    onChange={handleOnChangeTitle}
                    shape="rounded"
                    size="lg"
                />
                <Input
                    type="text"
                    placeholder="Description"
                    value={description} // Corrected
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
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}
                />
                <Select
                    options={assignee ? [assignee] : []} // Conditionally pass the options array
                    onSelect={(option) => handleOnSelectAssignee(option)}
                    value={assignee?.value}
                    size="lg"
                    shape="rounded"
                    headerPlaceholder="Assignee"
                    searchable
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

export { CreateStory };
