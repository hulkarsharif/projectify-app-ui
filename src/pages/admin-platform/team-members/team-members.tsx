import { useState } from "react";
import styled from "styled-components";
import { Input, Modal, Typography, Button } from "../../../design-system";
import { NoDataPlaceholder } from "../../components/NoDataPlaceHolder";
import noTeamMember from "../../../assets/illustrations//no-teamMember.svg";

const PageBase = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;
const CreateTeamMemberModalTitle = styled(Typography)`
    margin-bottom: var(--space-24);
`;
const StyledPositionInput = styled(Input)`
    grid-column: 1 / 3;
`;

const StyledPreferredEmail = styled(Input)`
    grid-column: 1 / 3;
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
const TeamMembers = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [position, setPosition] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [teamMember, setTeamMember] = useState<string[]>([]);

    const handleOnChangeFirstName = (value: string) => {
        setFirstName(value);
    };
    const handleOnChangeLastName = (value: string) => {
        setLastName(value);
    };
    const handleOnChangePosition = (value: string) => {
        setPosition(value);
    };
    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const [showCreateTeamMemberModal, setShowCreateTeamMemberModal] =
        useState<boolean>(false);
    return (
        <PageBase>
            {!teamMember.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTeamMember}
                    text="You don't have any team members yet!"
                    buttonText="Add a new Member"
                    buttonAction={() => setShowCreateTeamMemberModal(true)}
                />
            ) : (
                <h1>Team Members</h1>
            )}
            <Modal show={showCreateTeamMemberModal} position="center">
                <CreateTeamMemberModalTitle
                    variant="paragraphLG"
                    weight="medium"
                >
                    New Member
                </CreateTeamMemberModalTitle>
                <Inputs>
                    <Input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={handleOnChangeFirstName}
                        shape="rounded"
                        size="lg"
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={handleOnChangeLastName}
                        shape="rounded"
                        size="lg"
                    />
                    <StyledPositionInput
                        type="text"
                        placeholder="Position"
                        value={position}
                        onChange={handleOnChangePosition}
                        shape="rounded"
                        size="lg"
                    />
                    <StyledPreferredEmail
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleOnChangeEmail}
                        shape="rounded"
                        size="lg"
                    />
                </Inputs>
                <Buttons>
                    <Button
                        color="secondary"
                        size="lg"
                        shape="rounded"
                        variant="outlined"
                        fullWidth
                        onClick={() => setShowCreateTeamMemberModal(false)}
                    >
                        Cancel
                    </Button>
                    <Button size="lg" shape="rounded" color="primary" fullWidth>
                        Save
                    </Button>
                </Buttons>
            </Modal>
        </PageBase>
    );
};
export { TeamMembers as AdminTeamMembers };
