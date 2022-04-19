import styled from "styled-components";

export const NavBarCont = styled.nav`
  position: fixed;
  top: 0;
  background: white;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
  z-index: 2;
  height: 86px;
  /* border-bottom: 1px solid black; */
`;

export const NavFolder = styled.div`
  display: flex;
  height: 100%;
  width: fit-content;
  align-items: center;
  margin-left: auto;
`;

export const LinkList = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
  --color: hsl(270, 9%, 17%);
  --color2: white;
  //change the color of the text and border based on screen size
  @media (max-width: 785px) {
    position: absolute;
    z-index: -1;
    top: 86px;
    right: 0;
    width: 100%;
    height: calc(100vh - 72px);
    flex-direction: column;
    justify-content: flex-start;
    transition: transform 0.8s;
    background-color: hsl(270, 9%, 17%);
    background-image: url(${`${process.env.PUBLIC_URL}/dev16Images/insureImages/bg-pattern-mobile-nav.svg`});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
    ${(props) =>
      props.navModal
        ? "transform: translateX(0%);"
        : "transform: translateX(150%);"};
  }
`;

export const IconsList = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
  margin-left: auto;
`;

export const LinkCont = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLink = styled.button`
  position: relative;
  letter-spacing: 2px;
  font-weight: medium;
  font-size: 1em;
  opacity: 0.5;
  padding: 10px 30px;
  background: none;
  border: none;
  overflow: hidden;
  transition: all 0.1s;
  color: var(--color2);
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 785px) {
    width: 80%;
    height: 4rem;
    margin: 8px 0px;
  }

  ${({ highlight }) =>
    highlight &&
    `
      border: 2px solid var(--color2); 
      opacity: 1;
      &:hover {
        opacity: 1;
        background-color: var(--color2);
        color: var(--color);
      }
    `}

  @media (min-width: 785px) {
    color: var(--color);
    ${({ highlight }) =>
      highlight &&
      `
      border: 2px solid var(--color); 
      opacity: 1;
      &:hover {
        opacity: 1;
        background-color: var(--color);
        color: white;
      }
    `}
  }
`;

export const NavIcon = styled.a`
  position: relative;
  background: none;
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: center;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.6);
  height: calc(3em - 8px);
  width: calc(3em - 8px);
  margin: 0px 8px;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.8);
    transform: translateY(-2px);
  }
`;

export const LogoIcon = styled.div`
  height: fit-content;
  width: fit-content;
  position: relative;
`;

export const SandwichIcon = styled.button`
  position: absolute;
  height: 32px;
  width: 32px;
  border: 2px solid hsl(270, 9%, 17%);
  background: none;
  transition: all 0.1s;
  margin: 0px 8px;
  opacity: 0;
  pointer-events: none;
  @media (max-width: 785px) {
    opacity: 1;
    pointer-events: auto;
    position: relative;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const Line1 = styled.div`
  width: 60%;
  height: 2px;
  border-radius: 1px;
  position: absolute;
  transition: transform 0.5s;
  background-color: hsl(270, 9%, 17%);
  ${(props) =>
    props.navModal
      ? "top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(45deg);"
      : "top: 33%; left: 50%; transform: translate(-50%, -50%);"}
`;
export const Line2 = styled.div`
  width: 60%;
  height: 2px;
  border-radius: 1px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: hsl(270, 9%, 17%);
  ${(props) => props.navModal && "display: none;"}
`;
export const Line3 = styled.div`
  width: 60%;
  height: 2px;
  background-color: hsl(270, 9%, 17%);
  border-radius: 1px;
  position: absolute;
  transition: transform 0.5s;
  ${(props) =>
    props.navModal
      ? "top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-45deg);"
      : "top: 67%;; left: 50%; transform: translate(-50%, -50%);"}
`;

export const TabIndicator = styled.div`
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: 2px;
  transform: ${(props) =>
    props.currentTab ? `translateX(-8px)` : `translateX(100%)`};
  background: linear-gradient(
    90deg,
    #bf953f -65%,
    #fcf6ba -26.33%,
    #b38728 20.08%,
    #fbf5b7 63.91%,
    #aa771c 100%
  );
  @media (max-width: 785px) {
    height: 100%;
    width: 1px;
    left: 0px;
    bottom: 0px;
    transform: ${(props) =>
      props.currentTab ? `translateX(0px)` : `translateY(110%)`};
  }
`;
