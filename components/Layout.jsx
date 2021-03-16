import Header from "./Header";
import styled from 'styled-components';
import Banner from "./Banner";
import Post from "./Post";
import PostSlide from "./PostSlide";

const Layout = () => {
    return (
        <Container> 
            <Header />
            <Banner />
            <Post />
            <Slide>
                <Item>
                    <PostSlide />
                </Item>
                <Item>
                    <PostSlide />
                </Item>
                <Item>
                    <PostSlide />
                </Item>
            </Slide>
        </Container>
    )
}

export default Layout;

const Container = styled.div`
    margin: 0 auto;
    padding: 6rem 20rem;

    @media (max-width: 1279px) {
        padding: 3rem 6rem;
    };

    @media (max-width: 479px) {
        padding: 3rem 1rem;
    }

    /* @media (min-width: 768px) {
        padding: 3rem 3rem;
    }; */
`;

const Slide = styled.div`
    display: flex;
    margin-left: -3rem;

    @media (max-width: 479px) {
        flex-direction: column;
    }
`;

const Item = styled.div`
    width: calc((100% / 3) - 3rem);
    margin-left: 4rem;

    @media (max-width: 1279px) {
        width: calc((100% / 3));
    }

    @media (max-width: 479px) {
        width: 100%;
    }
`;