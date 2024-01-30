import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Typography, Button } from "../../../design-system";
import { adminProjects } from "../../../api";
import toast from "react-hot-toast";
import { NoDataPlaceholder } from "../../components/NoDataPlaceHolder";
import noProject from "../../../assets/illustrations/no-project.svg";

const PageBase = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;
const CreateProjectModalTitle = styled(Typography)`
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
const AdminProjects = () => {
    const [projects, setProjects] = useState<string[]>([]);
    const [showCreateProjectModal, setShowCreateProjectModal] =
        useState<boolean>(false);

    const [name, setName] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const [isError, setIsError] = useState<boolean>(false);
    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const handleOnChangeName = (value: string) => {
        setName(value);
    };

    const handleOnChangeDescription = (value: string) => {
        setDescription(value);
    };

    const isformSubmittable = name && description;

    const createProject = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);
            const response = await adminProjects.create({
                name,
                description
            });

            setShowCreateProjectModal(false);
            setIsFormSubmitting(false);
            setName("");
            setDescription("");
            console.log(response);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);
                setIsError(true);
                toast.error(error.message);
            }
        }
    };
    return (
        <PageBase>
            {!projects.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noProject}
                    text="You don't have any projects yet!"
                    buttonText="Add a Project"
                    buttonAction={() => setShowCreateProjectModal(true)}
                />
            ) : (
                <h1>Projects</h1>
            )}
            <Modal show={showCreateProjectModal} position="center">
                <form onSubmit={createProject} noValidate>
                    <CreateProjectModalTitle
                        variant="paragraphLG"
                        weight="medium"
                    >
                        New Project
                    </CreateProjectModalTitle>
                    <Inputs>
                        <Input
                            placeholder="Project Name"
                            value={name}
                            onChange={handleOnChangeName}
                            shape="rounded"
                            size="lg"
                            disabled={isFormSubmitting}
                        />
                        <Input
                            type="textarea"
                            placeholder="Project Description"
                            value={description}
                            onChange={handleOnChangeDescription}
                            shape="rounded"
                            size="lg"
                            disabled={isFormSubmitting}
                        />
                    </Inputs>
                    <Buttons>
                        <Button
                            color="secondary"
                            size="lg"
                            shape="rounded"
                            variant="outlined"
                            fullWidth
                            onClick={() => setShowCreateProjectModal(false)}
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
                </form>
            </Modal>
        </PageBase>
    );
};
export { AdminProjects };
