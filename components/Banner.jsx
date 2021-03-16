import styled from 'styled-components';

const Banner = () => {
    return (
        <BannerWrapper>
            <BannerContent>
                <BannerTitle>Dirodi Entertaining</BannerTitle>
                <BannerBlog>
                    <ImageBlog src="/img-open-quote.png" alt="img-open-quote"/>
                    <TitleBlog>Blog</TitleBlog>
                    <ImageBlog src="/img-close-quote.png" alt="img-close-quote"/>
                </BannerBlog>
                <ContentWrapperBlog>
                    <ContentBlog>dirodi entertaining blog dirodi entertaining dirodi blog.</ContentBlog>
                </ContentWrapperBlog>
                <SearchBlog autocomplete="off">
                    <FieldBlog placeholder="Search"/>
                    <IconBlog className="fa fa-search"></IconBlog>
                    <SubmitBlog type="submit">go</SubmitBlog>
                </SearchBlog>
            </BannerContent>
        </BannerWrapper>
    )
}

export default Banner;

const BannerWrapper = styled.div`
    max-width: 100%;
    height: 50vh;
    background: rgba(255, 255, 255, 0.5) url("/img-bg.png" ) no-repeat center top / contain;
    margin-top: 15rem;
    position: relative;
    text-align: center;
    margin-bottom: 15rem;

    @media (max-width: 1279px) {
        height: 40vh;
        margin-bottom: 0;
    };

    @media (max-width: 479px) {
        margin-top: 12rem;
    }
`;

const BannerContent = styled.div`
    position: absolute;
    top: 0; 
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;

    @media (max-width: 1023px) and (min-width: 768px) {
        width: 35rem;
    };
`;

const BannerTitle = styled.h3`
    font-size: 6rem;
    color: #0068c9;
    margin: 0;

    @media (max-width: 1279px) {
        font-size: 3rem;
    };

    @media (max-width: 479px) {
        font-size: 2rem;
    };
`;

const BannerBlog = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ImageBlog = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
    margin-bottom: 2rem;

    @media (max-width: 1279px) {
        width: 1.5rem;
        height: 1.5rem;
    };

    @media (max-width: 479px) {
        width: 1.2rem;
        height: 1.2rem;
    }
`;

const TitleBlog = styled.h2`
    margin: 0 1rem;
    font-size: 6rem;
    color: #2a447f;

    @media (max-width: 1279px) {
        font-size: 2.5rem;
    };

    @media (max-width: 479px) {
        font-size: 2rem;
    };
`;

const ContentWrapperBlog = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentBlog = styled.p`
    color: #ccc;
    width: 25rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const SearchBlog = styled.form`
   display: flex;
   align-items: center;
   justify-content: center;
   position: relative;
   max-width: 50%;
   top: 0;
   left: 50%;
   transform: translateX(-50%);

   @media (max-width: 1023px) {
       max-width: 100%;
   }   
`;

const FieldBlog = styled.input`
    width: 100%;
    padding: 2rem 9rem 2rem 6rem;
    border-radius: 2rem;
    border: none;
    background-color: #f4f5f7;

    &::placeholder {
        color: #d2d8e6;
    }
`;

const IconBlog = styled.i`
    width: 2rem;
    height: 2rem;
    color: #d2d8e6;
    position: absolute;
    left: 3rem;
    top: 50%;
    transform: translateY(-50%);
`;

const SubmitBlog = styled.button`
    width: 7rem;
    height: 4rem;
    border: none;
    border-radius: 1.8rem;
    background-color: #60a1db;
    color: white;
    text-transform: capitalize;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;