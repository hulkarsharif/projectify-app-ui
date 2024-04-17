import React, { useState, useEffect } from "react";
import data from "./data";
import styled from "styled-components";
import { Icon, Typography } from "../../../design-system";
import { Container, SectionBase } from "../components";

const ClientSection = styled(SectionBase)``;
const ClientSectionContainer = styled(Container)`
    text-align: center;
`;

const Header = styled(Typography)`
    margin-bottom: var(--space-50);
`;

const ContentWrapper = styled.div`
    height: 50rem;
    position: relative;
    overflow: hidden;
`;

const Article = styled.article`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all 0.3s linear;

    &.activeSlide {
        opacity: 1;
        transform: translateX(0);
    }

    &.lastSlide {
        transform: translateX(-100%);
    }

    &.nextSlide {
        transform: translateX(100%);
    }
`;

const Avatar = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: var(--space-20);
    box-shadow: 0 var(--space-6) var(--space-16) rgba(0, 0, 0, 0.2);

    @media (min-width: 700px) {
        width: 17rem;
        height: 17rem;
    }
`;

const Name = styled(Typography)`
    margin-bottom: var(--space-4);
`;

const Title = styled(Typography)`
    color: var(--jaguar-600);
    margin-bottom: var(--space-32);
`;

const StarsWrapper = styled.div`
    width: max-content;
    margin: 0 auto;
    display: flex;
    gap: var(--space-18);
    margin-bottom: var(--space-36);
`;

const Description = styled(Typography)`
    color: var(--jaguar-700);
    max-width: 60rem;
    margin: 0 auto;
    margin-bottom: var(--space-50);
`;

const PageCountWrapper = styled.div`
    width: max-content;
    margin: 0 auto;
    display: flex;
    gap: var(--space-20);
`;

const PageCount = styled.div<{ $active: boolean }>`
    cursor: pointer;
    width: var(--space-14);
    height: var(--space-14);
    border: none;
    border-radius: var(--space-4);
    background-color: ${(props) =>
        props.$active ? "var(--primary-500)" : "var(--jaguar-100)"};

    @media (min-width: 700px) {
        width: var(--space-20);
        height: var(--space-20);
        border-radius: var(--space-8);
    }
`;

const PrevButton = styled.button`
    position: absolute;
    left: 0;
    top: 20rem;
    transform: translateY(-50%);
    width: 4.4rem;
    height: 4.4rem;
    border-radius: var(--space-10);
    border: 0.15rem solid var(--jaguar-100);
    background-color: var(--white);
    cursor: pointer;
    transition: all 0.3s linear;

    svg {
        fill: var(--primary-500);
    }

    &:hover,
    &:focus {
        border: none;
        background-color: var(--primary-500);

        svg {
            fill: var(--white);
        }
    }

    @media (min-width: 400px) {
        width: 5.4rem;
        height: 5.4rem;
        border-radius: var(--space-16);
    }

    @media (min-width: 700px) {
        width: 8.4rem;
        height: 8.4rem;
        border-radius: var(--space-24);
    }
`;

const PrevIcon = styled(Icon)`
    width: 2.7rem;
    height: 2.7rem;

    @media (min-width: 400px) {
        width: 3rem;
        height: 3rem;
    }

    @media (min-width: 700px) {
        width: 4rem;
        height: 4rem;
    }
`;

const NextButton = styled.button`
    position: absolute;
    right: 0;
    top: 20rem;
    top: 20rem;
    transform: translateY(-50%);
    width: 4.4rem;
    height: 4.4rem;
    border-radius: var(--space-10);
    border: 0.15rem solid var(--jaguar-100);
    background-color: var(--white);
    cursor: pointer;
    transition: all 0.3s linear;

    svg {
        fill: var(--primary-500);
    }

    &:hover,
    &:focus {
        border: none;
        background-color: var(--primary-500);

        svg {
            fill: var(--white);
        }
    }

    @media (min-width: 400px) {
        width: 5.4rem;
        height: 5.4rem;
        border-radius: var(--space-16);
    }

    @media (min-width: 700px) {
        width: 8.4rem;
        height: 8.4rem;
        border-radius: var(--space-24);
    }
`;

const NextIcon = styled(Icon)`
    width: 1.7rem;
    height: 1.7rem;

    @media (min-width: 400px) {
        width: 2rem;
        height: 2rem;
    }

    @media (min-width: 700px) {
        width: 3rem;
        height: 3rem;
    }
`;

const Clients = () => {
    const [people] = useState(data);
    const [index, setIndex] = useState(0);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        setActivePage(index);

        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <ClientSection id="testimonials">
            <ClientSectionContainer>
                <Header variant="h5" weight="bold">
                    Trust Our Clients
                </Header>
                <ContentWrapper>
                    {people.map((person, personIdx) => {
                        const { id, image, name, title, rating, description } =
                            person;
                        let position = "nextSlide";
                        if (personIdx === index) {
                            position = "activeSlide";
                        }
                        if (
                            personIdx === index - 1 ||
                            (index === 0 && personIdx === people.length - 1)
                        ) {
                            position = "lastSlide";
                        }
                        return (
                            <Article className={position} key={id}>
                                <Avatar src={image} alt={name} />
                                <Name variant="h6" weight="bold">
                                    {name}
                                </Name>
                                <Title variant="subtitleLG" weight="medium">
                                    {title}
                                </Title>
                                <StarsWrapper>
                                    {rating.map((_, idx) => {
                                        return (
                                            <Icon key={idx} iconName="star" />
                                        );
                                    })}
                                </StarsWrapper>
                                <Description
                                    variant="paragraphMD"
                                    weight="medium"
                                >
                                    {description}
                                </Description>
                                <PageCountWrapper>
                                    {people.map((_, idx) => (
                                        <PageCount
                                            key={idx}
                                            $active={idx === activePage}
                                            onClick={() => setIndex(idx)}
                                        />
                                    ))}
                                </PageCountWrapper>
                            </Article>
                        );
                    })}
                    <PrevButton onClick={() => setIndex(index - 1)}>
                        <PrevIcon iconName="arrow-left" />
                    </PrevButton>
                    <NextButton onClick={() => setIndex(index + 1)}>
                        <NextIcon iconName="arrow-right" />
                    </NextButton>
                </ContentWrapper>
            </ClientSectionContainer>
        </ClientSection>
    );
};

export default Clients;
