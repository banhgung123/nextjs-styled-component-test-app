import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderWrapper>
            <div>
                <a href="#"><Logo src="/img-logo.png" alt="Picture of the author"/></a>
            </div>
            <MenuWrapper>
                <Menu>
                    <MenuItem><a href="#">products</a></MenuItem>
                    <MenuItem><a href="#">services</a></MenuItem>
                    <MenuItem><a href="#">blog</a></MenuItem>
                    <MenuItem><a href="#">contact</a></MenuItem>
                    <MenuItem><a href="#">about</a></MenuItem>
                </Menu>
                <MenuButton href="#">Free Test</MenuButton>
                <MenuHamburgerWrapper>
                    <MenuHamburger>
                        <label htmlFor="hamburger"><i className="fas fa-bars"></i></label>
                        <input type="checkbox" id="hamburger"/>
                        <div>
                            <a href="#">Products</a>
                            <a href="#">Services</a>
                            <a href="#">Blog</a>
                            <a href="#">Games</a>
                            <a href="#">Reviews</a>
                        </div>
                    </MenuHamburger>
                </MenuHamburgerWrapper>
            </MenuWrapper>
            
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    padding: 3rem 20rem;
    background-color: #fff;
    box-shadow: 0 0 1rem 0.1rem gray;
    width: 100%;
    cursor: pointer;

    @media (max-width: 1279px) {
        padding: 1.5rem 6rem;
    };

    @media (max-width: 479px) {
        padding: 1rem;
    };
`;

const Logo = styled.img`
    width: 100%;
    object-fit: cover;
`;

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const Menu = styled.ul`
    display: flex;
    padding-left: 0;
    list-style: none;
    padding: 1rem;
    height: 100%;

    @media (max-width: 479px) {
        display: none;
    }
`;

const MenuItem = styled.li`
    font-size: 1.4rem;
    margin-left: 6rem;
    text-transform: capitalize;
    transition: font-weight 0.2s linear, text-decoration 0.2s linear;

    a:hover {
        font-weight: bold;
        text-decoration: underline solid black 0.3rem; 
    }

    @media (max-width: 1279px) {
        margin-left: 2rem;
    };
`;

const MenuButton = styled.a`
    display: inline-block;
    text-align: center;
    width: 12rem;
    font-size: 1.4rem;
    margin-left: 6rem;
    padding: 1rem 2rem;
    border-radius: 2rem;
    color: white;
    background-color: #0068cb;

    @media (max-width: 1279px) {
        margin-left: 4rem;
    };

    @media (max-width: 374px) {
        width: 10rem;
        font-size: 1.2rem;
        margin-left: 1rem;
    };
`;

const MenuHamburgerWrapper = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;

const MenuHamburger = styled.nav`
    div {
        width: 100vw;
        height: 23rem;
        background-color: #eee;
        text-align: center;
    };

    input[type="checkbox"] {
        display: none;
    };

    @media (min-width: 480px) {
        opacity: 0;
        visibility: hidden;
    }

    /* [ON SMALL SCREENS] */
    @media  (max-width: 479px) {

        display: block;
    /* Show Hamburger Icon */
        label { 
            display: inline-block;
            font-style: normal;
            font-size: 1.4em;
            padding: 0.5rem;
        };

        /* Break down menu items into vertical */
        a {
            box-sizing: border-box;
            display: block;
            width: 100%;
            padding: 1rem 0;
            cursor: pointer;
        };

        a:hover {
            background-color: rgba(238, 238, 238, 0.842);
        };

        label {
            position: absolute;
            top: 0;
            right: 0;
        };

        /* Toggle Show/Hide Menu */
        div {
            opacity: 0;
            visibility: hidden;
            margin-top: 4.5rem;
            margin-right: -1rem;
        };

        input[type="checkbox"]:checked ~ div {
            opacity: 1;
            visibility: visible;
            transition: all 0.2s linear;
        };
    };
`;