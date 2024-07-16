import { useState } from "react";
import styled from "styled-components";
import {
    Badge,
    Menu,
    MenuOption,
    Typography,
    Table,
    TableBody,
    TableBodyCell,
    TableHead,
    TableHeadCell,
    TableRow,
    LinearProgress
} from "design-system";
import { formatAsMMMddYYYY, formatDeadline } from "Utils";
import { ProjectStatus, ProjectWithContributors } from "types";
import { Scrollable } from "application/components";

import { ChangeProjectStatusModal } from "./ChangeProjectStatusModal";
import { EditProjectModal } from "./EditProjectModal";
import { ManageContributorsModal } from "./ManageContributorsModal";

type ProjectsTableProps = {
    data: ProjectWithContributors[];
};

type ActionsOnProject = ProjectStatus | "edit" | "contributors";

const statuses = ["ACTIVE", "COMPLETED", "ARCHIVED", "ONHOLD"];
const options: MenuOption[] = [
    { label: "Edit", iconName: "edit", value: "edit", color: "primary" },
    {
        label: "Reactivate",
        iconName: "play-in-circle",
        value: statuses[0],
        color: "primary"
    },
    {
        label: "Complete",
        iconName: "check-in-circle",
        value: statuses[1],
        color: "primary"
    },
    {
        label: "Archive",
        iconName: "archive",
        value: statuses[2],
        color: "danger"
    },
    {
        label: "Put On Hold",
        iconName: "pause-in-circle",
        value: statuses[3],
        color: "danger"
    },
    {
        label: "Manage Contributors",
        iconName: "members",
        value: "contributors",
        color: "primary"
    }
];

const allowedActions = {
    ACTIVE: [options[5], options[0], options[2], options[3], options[4]],
    ARCHIVED: [options[5], options[0], options[1], options[2], options[4]],
    ONHOLD: [options[5], options[0], options[1], options[2], options[3]],
    COMPLETED: [options[5], options[0], options[1], options[3], options[4]]
};

const columns = ["20%", "10%", "20%", "15%", "15%", "10%", "10%"];
enum StatusToBadgeColors {
    ACTIVE = "primary",
    ARCHIVED = "gray",
    COMPLETED = "green",
    ONHOLD = "red"
}

const TableContainer = styled(Scrollable)`
    height: calc(100% - 13rem);
`;

const ProjectDescription = styled(Typography)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const AboutProject = styled.div`
    width: 90%;
`;

const ProgressWrapper = styled.div`
    width: 80%;
`;

const renderDeadline = (isoDate: string) => {
    const formattedDeadline = formatDeadline(isoDate);
    const isDeadlineClose = formattedDeadline.includes("left");

    return (
        <Typography
            variant="paragraph-sm"
            weight="medium"
            color={isDeadlineClose ? "error-strong" : "success-strong"}
        >
            {formattedDeadline}
        </Typography>
    );
};

const ProjectsTable: React.FC<ProjectsTableProps> = ({ data }) => {
    const [selectedProjectId, setSelectedProjectId] = useState("");
    const [changeStatusTo, setChangeStatusTo] = useState<ProjectStatus>();
    const [showChangeProjectStatusModal, setShowChangeProjectStatusModal] =
        useState(false);
    const [showEditProjectModal, setShowEditProjectModal] = useState(false);
    const [showManageContributorsModel, setShowManageContributorsModal] =
        useState(false);

    const handleOnSelectCellMenu = (
        projectId: string,
        value: ActionsOnProject
    ) => {
        setSelectedProjectId(projectId);
        if (statuses.includes(value)) {
            setShowChangeProjectStatusModal(true);
            setChangeStatusTo(value as ProjectStatus);
            return;
        } else if (value === "edit") {
            setShowEditProjectModal(true);
        } else if (value === "contributors") {
            setShowManageContributorsModal(true);
        }
    };

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow columns={columns}>
                            <TableHeadCell>About</TableHeadCell>
                            <TableHeadCell>Status</TableHeadCell>
                            <TableHeadCell>Progress</TableHeadCell>
                            <TableHeadCell>Start Date</TableHeadCell>
                            <TableHeadCell>Deadline</TableHeadCell>
                            <TableHeadCell>Contributors</TableHeadCell>
                            <TableHeadCell> </TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((project) => {
                            return (
                                <TableRow key={project.id} columns={columns}>
                                    <TableBodyCell>
                                        <AboutProject>
                                            <Typography
                                                variant="paragraph-sm"
                                                weight="medium"
                                            >
                                                {project.name}
                                            </Typography>
                                            <ProjectDescription
                                                variant="subtitle-sm"
                                                weight="medium"
                                                color="neutral"
                                            >
                                                {project.description}
                                            </ProjectDescription>
                                        </AboutProject>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Badge
                                            label={project.status}
                                            color={
                                                StatusToBadgeColors[
                                                    project.status
                                                ]
                                            }
                                            variant="outlined"
                                            shape="rounded"
                                        />
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <ProgressWrapper>
                                            <LinearProgress
                                                value={project.progress}
                                                color="primary"
                                                shape="rounded"
                                            />
                                        </ProgressWrapper>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Typography
                                            variant="paragraph-sm"
                                            weight="medium"
                                        >
                                            {formatAsMMMddYYYY(
                                                project.startDate
                                            )}
                                        </Typography>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        {renderDeadline(project.endDate)}
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Typography
                                            variant="paragraph-sm"
                                            weight="medium"
                                        >
                                            {project.numberOfContributors || 0}
                                        </Typography>
                                    </TableBodyCell>
                                    <TableBodyCell>
                                        <Menu
                                            options={
                                                allowedActions[project.status]
                                            }
                                            onSelect={(value) =>
                                                handleOnSelectCellMenu(
                                                    project.id,
                                                    value as ActionsOnProject
                                                )
                                            }
                                        />
                                    </TableBodyCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <ChangeProjectStatusModal
                show={showChangeProjectStatusModal}
                changeStatusTo={changeStatusTo!}
                projectId={selectedProjectId}
                closeModal={() => setShowChangeProjectStatusModal(false)}
            />
            <EditProjectModal
                show={showEditProjectModal}
                closeModal={() => setShowEditProjectModal(false)}
                projectId={selectedProjectId}
            />
            <ManageContributorsModal
                show={showManageContributorsModel}
                projectId={selectedProjectId}
                closeModal={() => setShowManageContributorsModal(false)}
            />
        </>
    );
};

export { ProjectsTable };
