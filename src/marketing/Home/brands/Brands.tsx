import styled from "styled-components";
import { Container, SectionBase } from "../../components";
import google from "../Images/google.svg";
import airbnb from "../Images/airbnb.svg";
import creative from "../Images/creative.svg";
import shopify from "../Images/shopify.svg";
import amazon from "../Images/amazon.svg";

const companies = [google, airbnb, creative, shopify, amazon];

const BrandSectionBase = styled(SectionBase)`
    padding-top: 3.5rem;
    padding-bottom: 2.5rem;
`;

const BrandContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const ImageWrapper = styled.div`
    width: 11.6rem;
    height: max-content;
`;

const CompanyLogo = styled.img`
    width: 100%;
    height: auto;
`;

const Brands = () => {
    return (
        <BrandSectionBase id="brands">
            <BrandContainer>
                {companies.map((company, idx) => (
                    <ImageWrapper>
                        <CompanyLogo key={idx} src={company} />
                    </ImageWrapper>
                ))}
            </BrandContainer>
        </BrandSectionBase>
    );
};

export default Brands;
