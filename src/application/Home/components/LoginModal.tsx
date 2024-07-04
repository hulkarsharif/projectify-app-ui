import styled from "styled-components";
import { Typography, Modal, Button } from "../../../design-system";
import { useNavigate } from "react-router-dom";

type CreateTasksModalProps = {
    show: boolean;
    closeModal: () => void;
};

const StyledModal = styled(Modal)``;

const ModalTitle = styled(Typography)`
    text-align: center;
    margin-bottom: var(--space-24);
`;
const Buttons = styled.div`
    display: flex;
    gap: var(--space-30);
`;

const LoginModal: React.FC<CreateTasksModalProps> = ({ show, closeModal }) => {
    const navigate = useNavigate();

    return (
        <StyledModal
            show={show}
            position="center"
            closeIcon="true"
            onClose={closeModal}
        >
            <ModalTitle variant="paragraphLG" weight="medium">
                Please, select your role and log in:
            </ModalTitle>
            <Buttons>
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                        navigate("admin/sign-in");
                    }}
                >
                    Admin
                </Button>
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    variant="outlined"
                    fullWidth
                    onClick={() => {
                        navigate("team-member/sign-in");
                    }}
                >
                    Team Member
                </Button>
            </Buttons>
        </StyledModal>
    );
};

export default LoginModal;
