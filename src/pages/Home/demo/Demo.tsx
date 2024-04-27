import styled from "styled-components";
import { Typography, Button } from "../../../design-system";
import paperMail from "../Images/paperMail.png";
import { Container, SectionBase } from "../components";
import user from "../../Home/Images/DemoImage/user.svg";
import email from "../../Home/Images/DemoImage/email.svg";
import company from "../../Home/Images/DemoImage/company.svg";
import background from "../Images/DemoImage/bgEffect-demo.png";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: string;
}
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

const Input = styled.input<InputProps>`
    width: 100%;
    padding: var(--space-16) var(--space-48);
    border: 0.3rem solid var(--jaguar-100);
    border-radius: var(--space-16);
    background-color: var(--white);
    background-image: url(${(props) => props.icon});
    background-size: 2.4rem;
    background-repeat: no-repeat;
    background-position: 10px center;
    transition: border-color 0.3s ease;

    &:focus {
        outline: none;
        border-color: var(--primary-500);
    }
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
                        <Input icon={user} placeholder="Name" type="text" />
                        <Input icon={email} placeholder="Email" type="email" />
                        <Input
                            icon={company}
                            placeholder="Company"
                            type="text"
                        />

                        <RequestButton fullWidth shape="circle" size="lg">
                            Request a Demo
                        </RequestButton>
                    </RightForm>
                </BaseWrapper>
            </DemoContainer>
        </DemoSection>
    );
};

export default Demo;
