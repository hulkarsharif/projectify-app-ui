import toast from "react-hot-toast";
import { useStore } from "../../../hooks";
import { Actions, ReactivateProjectAction } from "../../../store";
import { ConfirmationModal } from "../../components";

import { projectsService } from "../../../api/projects";

type ReactivateProjectModalProps = {
    show: boolean;
    projectId: string;
    closeModal: () => void;
};

const ReactivateProjectModal: React.FC<ReactivateProjectModalProps> = ({
    show,
    closeModal,
    projectId
}) => {
    const { dispatch } = useStore();
    const reactivateProject = () => {
        projectsService
            .reactivate(projectId)
            .then((_) => {
                const action: ReactivateProjectAction = {
                    type: Actions.REACTIVATE_PROJECT,
                    payload: { id: projectId }
                };
                dispatch(action);
                closeModal();
                toast.success("Project has been successfully reactivated");
            })
            .catch((e) => {
                closeModal();
                const err = e as Error;
                toast.error(err.message);
            });
    };
    return (
        <ConfirmationModal
            confirmationMessage="Are you sure you want to reactivate this project?"
            show={show}
            cancel={closeModal}
            onConfirm={reactivateProject}
            confirmButtonColor="primary"
        />
    );
};

export { ReactivateProjectModal };
