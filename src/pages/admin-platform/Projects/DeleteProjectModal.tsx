import toast from "react-hot-toast";
import { projectsService } from "../../../api/projects";
import { useStore } from "../../../hooks";
import { Actions, RemoveProjectAction } from "../../../store";
import { ConfirmationModal } from "../../components";

type DeleteProjectModalProps = {
    show: boolean;
    projectId: string;
    closeModal: () => void;
};

const DeleteProjectModal: React.FC<DeleteProjectModalProps> = ({
    show,
    closeModal,
    projectId
}) => {
    const { dispatch } = useStore();
    const deleteProject = () => {
        projectsService
            .delete(projectId)
            .then((_) => {
                const action: RemoveProjectAction = {
                    type: Actions.REMOVE_PROJECT,
                    payload: { id: projectId }
                };
                dispatch(action);
                closeModal();
                toast.success("Team Member has been successfully removed");
            })
            .catch((e) => {
                closeModal();
                const err = e as Error;
                toast.error(err.message);
            });
    };
    return (
        <ConfirmationModal
            confirmationMessage="Are you sure you want to delete a project?"
            show={show}
            cancel={closeModal}
            onConfirm={deleteProject}
        />
    );
};

export { DeleteProjectModal };
