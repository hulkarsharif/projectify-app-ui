import styled from "styled-components";
import { Typography, Button, Icon } from "../../../design-system";
import paperMail from "../Images/paperMail.png";

const DemoSection = styled.section`
    background: linear-gradient(81.95deg, #6826f7 0%, #bb9cfb 100%);
`;

const DemoContainer = styled.div`
    text-align: center;
    padding: var(--space-100) 2rem;

    @media (min-width: 1275px) {
        padding: var(--space-100) 15rem;
    }

    @media (min-width: 1720px) {
        padding: var(--space-100) 37.5rem;
    }
`;

const Header = styled(Typography)`
    color: var(--white);
    margin-bottom: var(--space-50);
`;

const BaseWrapper = styled.div`
    /* gap: var(--space-34); */
    display: flex;
`;

const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: var(--space-80);
    align-items: center;
    justify-content: center;
`;
const Image = styled.img`
    width: 50%;
`;

const RightForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;

    *:not(:nth-child(3)) {
        margin-bottom: var(--space-20);
    }
    *:nth-child(3) {
        margin-bottom: var(--space-30);
    }
`;
const InputWrapper = styled.div`
    /* background-color: green; */
    position: relative;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 80%;
    padding: var(--space-16) var(--space-48);
    border: 0.3rem solid var(--jaguar-100);
    border-radius: var(--space-16);

    &:focus {
        outline: none;
        border: 0.3rem solid var(--primary-500);
    }
`;

const InputIcon = styled(Icon)`
    position: absolute;
    left: var(--space-12);
    width: var(--space-24);
    height: var(--space-24);
`;

const RequestButton = styled(Button)`
    color: var(--black);
    width: 80%;
    background-color: var(--sunglow-300);
`;
const Demo = () => {
    return (
        <DemoSection>
            <DemoContainer>
                <Header variant="h5" weight="bold">
                    Ready to get your hands on Projectify!
                </Header>
                <BaseWrapper>
                    <ImageWrapper>
                        <Image src={paperMail} alt="PaperMail Image" />
                    </ImageWrapper>
                    <RightForm>
                        <InputWrapper>
                            <InputIcon iconName="user" />
                            <Input placeholder="Name" type="text"></Input>
                        </InputWrapper>
                        <InputWrapper>
                            <InputIcon iconName="email" />
                            <Input placeholder="Email" type="email"></Input>
                        </InputWrapper>
                        <InputWrapper>
                            <InputIcon iconName="company" />
                            <Input placeholder="Company" type="text"></Input>
                        </InputWrapper>
                        <RequestButton
                            fullWidth={true}
                            shape="rounded"
                            size="lg"
                        >
                            Request a Demo
                        </RequestButton>
                    </RightForm>
                </BaseWrapper>
            </DemoContainer>
        </DemoSection>
    );
};

export default Demo;
