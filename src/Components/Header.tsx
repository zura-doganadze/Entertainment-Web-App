import styled from "styled-components";
import Logo from "../../public/Header-img/logo.svg";
import personalImg from "../assets/da5cdb1a76e0fe3a324be8c07003297e.png";
const Header = () => {
  const data: string[] = [
    "./Header-img/icon-nav-home.svg",
    "./Header-img/icon-nav-movies.svg",
    "./Header-img/icon-nav-tv-series.svg",
    "./Header-img/icon-nav-bookmark.svg",
  ];
  return (
    <Wrapper>
      <div>
        <img src={Logo} alt="" />
        <NavContainer>
          {data.map((item) => {
            return (
              <div key={item}>
                <img src={item} alt="img" />
              </div>
            );
          })}
        </NavContainer>
      </div>

      <PersonalImgC>
        <img src={personalImg} alt="img" />
      </PersonalImgC>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 96px;
  min-height: 70vh;
  padding: 35px;
  margin: 35px;
  border-radius: 20px;
  background: var(--Semi-Dark-Blue, #161d2f);
  img {
    cursor: pointer;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 28px;
  margin-top: 74px;
`;
const PersonalImgC = styled.div`
  img {
    max-width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid var(--Pure-White, #fff);
    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  }
`;
