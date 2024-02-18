import { useEffect, useState } from "react";
import { NoDataPlaceholder, PageHeader } from "../../components";
import noTask from "../../../assets/illustrations/no-task.svg";
import { adminTasksService } from "../../../api";
import { useStore } from "../../../hooks";
import { Actions, PopulateTasksAction } from "../../../store";
import { groupTasksByStatus } from "../../../Utils";
import { CreateTaskModal } from "./CreateTaskModal";
import { Kanban } from "./Kanban";
import toast from "react-hot-toast";

// const PageBase = styled.main`
//     position: relative;
//     width: 100%;
//     height: 100%;
// `;

// const PageContent = styled.section`
//     width: 80%;
//     margin: 0 auto;
// `;

const AdminTasksPage = () => {
    const [isTasksFetching, setIsTasksFetching] = useState(true);

    const [showCreateTaskModal, setShowCreateTaskModal] = useState(false);

    const {
        state: { adminPersonalTasks },
        dispatch
    } = useStore();

    useEffect(() => {
        adminTasksService
            .getTasks()
            .then((data) => {
                setIsTasksFetching(false);
                const action: PopulateTasksAction = {
                    type: Actions.POPULATE_TASKS,
                    payload: data.data.tasks
                };
                dispatch(action);
            })
            .catch((e) => {
                const err = e as Error;
                setIsTasksFetching(false);
                toast.error(err.message);
            });
    }, []);

    if (isTasksFetching) {
        return null;
    }

    const tasksArray = Object.values(adminPersonalTasks);

    const groupedTasks = groupTasksByStatus(tasksArray);

    return (
        <>
            {!tasksArray.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTask}
                    text="You don’t have any tasks yet!"
                    buttonText="Add a Task"
                    buttonAction={() => setShowCreateTaskModal(true)}
                />
            ) : (
                <>
                    <PageHeader
                        pageTitle="Tasks"
                        actionButtonText="Create a Task"
                        actionButtonOnClick={() => setShowCreateTaskModal(true)}
                    />
                    <Kanban groupedTasks={groupedTasks} />
                </>
            )}
            <CreateTaskModal
                show={showCreateTaskModal}
                closeModal={() => setShowCreateTaskModal(false)}
            />
        </>
    );
};

export { AdminTasksPage };
