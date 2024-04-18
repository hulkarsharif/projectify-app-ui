import styled from "styled-components";
import { Typography, Button, Icon } from "../../../design-system";
import paperMail from "../Images/paperMail.png";
import { Container, SectionBase } from "../components";

const DemoSection = styled(SectionBase)`
    background: linear-gradient(81.95deg, #6826f7 0%, #bb9cfb 100%);
`;

const DemoContainer = styled(Container)`
    text-align: center;
`;

const Header = styled(Typography)`
    color: var(--white);
    margin-bottom: var(--space-50);
`;

const BaseWrapper = styled.div`
    max-width: 97.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: var(--space-30);

    @media (max-width: 1020px) {
        width: 100%;
    }

    @media (max-width: 40em) {
        display: block;
    }
`;

const ImageWrapper = styled.div`
    width: 50%;

    @media screen and (max-width: 40em) {
        width: 80%;
        margin: 0 auto;
        margin-bottom: var(--space-50);
    }
    @media screen and (max-width: 30em) {
        width: 100%;
    }
`;
const Image = styled.img`
    width: 100%;
    height: auto;
`;

const RightForm = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: var(--space-20);

    @media screen and (max-width: 40em) {
        width: 80%;
        margin: 0 auto;
    }
    @media screen and (max-width: 30em) {
        width: 100%;
    }
`;
const InputWrapper = styled.div`
    /* background-color: green; */
    position: relative;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    padding: var(--space-16) var(--space-48) !important;
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
`;

const RequestButton = styled(Button)`
    color: var(--black);

    background-color: var(--sunglow-300);
`;
const Demo = () => {
    return (
        <DemoSection id="demo">
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
                        <RequestButton fullWidth shape="rounded" size="lg">
                            Request a Demo
                        </RequestButton>
                    </RightForm>
                </BaseWrapper>
            </DemoContainer>
        </DemoSection>
    );
};

export default Demo;
