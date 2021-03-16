import styled from 'styled-components';

const PostSlide = () => {
    return (
        <PostWrapper>
            <Wrapper>
                <LeftPost
                    src="https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                    alt="https://images.unsplash.com/photo-1525253013412-55c1a69a5738?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
                />
                <RightPost>
                    <ColorButton>The newest</ColorButton>
                    <TitlePost>How To Choose Bicycle For Spring In Australia Shopping Centres?</TitlePost>
                    <Content>
                        <ContentPost>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam libero debitis iure ad odio aliquid, quam. Numquam libero debitis iure ad odio aliquid, quam.</ContentPost>
                        <i className="fas fa-arrow-right"></i>
                    </Content>
                    <Author>
                        <Avatar
                            src="https://images.unsplash.com/photo-1565209704209-6a3a0119bcbb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                            alt="https://images.unsplash.com/photo-1565209704209-6a3a0119bcbb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        />
                        <div>
                            <Info>By: Sebastian</Info>
                            <Info>Just now</Info>
                        </div>
                    </Author>
                </RightPost>
            </Wrapper>
        </PostWrapper>
    )
}

export default PostSlide;

const PostWrapper = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    max-width: 100%;
    height: auto;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: stretch;
`;

const LeftPost = styled.img`
    width: 30rem;
    height: 30rem;
    border-radius: 3rem;
    object-fit: cover;
    margin-bottom: 2rem;

    @media (max-width: 1279px) {
        height: 20rem;
        object-fit: fill;
    }
`;

const RightPost = styled.div`
    width: 100%;
`;

const ColorButton = styled.button`
    color: #9381bf;
    border: none;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2rem;
    position: relative;

    &::after {
        content: '';
        background-color: purple;
        opacity: 0.1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        position: absolute;
    }
`;  

const TitlePost = styled.h3`
    font-weight: bold;
    width: 100%;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;

    @media (max-width: 479px) {
        width: 90%;
    }
`;

const ContentPost = styled.p`
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;

    @media (max-width: 479px) {
        width: 90%;
    }
`;

const Content = styled.div`
    font-size: 1.3rem;
    color: #ccc;
    margin-bottom: 1rem;
`;

const Author = styled.div`
    display: flex;
`;

const Avatar = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 1.2rem;
`;

const Info = styled.p`
    margin: 0 0 0 1rem;
    font-size: 1.2rem;

    &:not(:last-child) {
        font-weight: bold;
    }
`;