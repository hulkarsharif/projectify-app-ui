import { useState, useEffect } from "react";
import styled from "styled-components";
import {
    Input,
    Modal,
    Typography,
    Button,
    OptionValue
} from "../../../design-system";
import { adminProjectsService } from "../../../api";
import toast from "react-hot-toast";
import { NoDataPlaceholder, PageHeader } from "../../components";
import noProject from "../../../assets/illustrations/no-project.svg";

const AdminProjects = () => {
    const [showCreateProjectModal, setShowCreateProjectModal] = useState(false);

    const [statusFilter, setStatusFilter] = useState("");
    const [searchText, setSearchText] = useState("");

    const [isTeamMembersFetching, setIsTeamMembersFetching] = useState(true);
    const {
        state: { projects },
        dispatch
    } = useStore();

    const handleSortByStatus = (status: OptionValue) => {
        let sortedProjects: Project[] = [];
    };

    if (isTeamMembersFetching) return null;

    const teamMembersArr = Object.values(teamMembers);

    const filterTeamMembers = () => {
        let filteredTeamMembers = teamMembersArr;
        if (statusFilter && statusFilter !== "all") {
            filteredTeamMembers = filteredTeamMembers.filter(
                (teamMember) => teamMember.status === statusFilter
            );
        }
        if (searchText) {
            filteredTeamMembers = filteredTeamMembers.filter(
                (teamMember) =>
                    teamMember.firstName
                        .toLowerCase()
                        .includes(searchText.toLowerCase()) ||
                    teamMember.lastName
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
            );
        }

        return filteredTeamMembers;
    };

    const filteredTeamMembers = filterTeamMembers();

    return (
        <>
            {!teamMembersArr.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTeamMember}
                    text="You don’t have any team members yet!"
                    buttonText="Add a Team Member"
                    buttonAction={() => setShowCreateTeamMemberModal(true)}
                ></NoDataPlaceholder>
            ) : (
                <>
                    <PageHeader
                        pageTitle="Team Members"
                        actionButtonText="Create A Member"
                        actionButtonOnClick={() =>
                            setShowCreateTeamMemberModal(true)
                        }
                    />
                    <TeamMemberFilters
                        setSelectedStatus={handleSetStatusFilter}
                        selectedStatus={statusFilter}
                        searchText={searchText}
                        setSearchText={setSearchText}
                    />
                    <TeamMembersTable data={filteredTeamMembers} />
                </>
            )}

            <CreateTeamMemberModal
                show={showCreateTeamMemberModal}
                closeModal={() => setShowCreateTeamMemberModal(false)}
            />
        </>
    );
};

export { AdminProjects };
