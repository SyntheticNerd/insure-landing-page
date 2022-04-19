import {
  NavBarCont,
  NavFolder,
  LinkList,
  IconsList,
  LinkCont,
  NavLink,
  NavIcon,
  SandwichIcon,
  Line1,
  Line2,
  Line3,
  TabIndicator,
  LogoIcon,
} from "./NavStyle";
import { useState, useEffect, useRef } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

export default function Nav() {
  const [navModal, setNavModal] = useState(false);
  const [frames, setFrames] = useState([]);
  // let navigate = useNavigate();
  let location = { pathname: "_" };
  const linkList = useRef(null);

  //this use effect will add event hooks to the document when the nav is opened
  //event hooks are removed when the nav is closed
  useEffect(() => {
    console.log(frames);
    setFrames(document.getElementsByTagName("iframe"));
    var iframeDetector = {
      iframeMouseOver: false,
    };
    function hideOnClickOutside(element) {
      const outsideClickListener = (event) => {
        if (!element.contains(event.target) && navModal) {
          setNavModal(false);
          removeClickListener();
        }
      };
      //Dont for get to add an ID to each of your iFrames
      const removeClickListener = () => {
        document.removeEventListener("click", outsideClickListener);
        window.removeEventListener("blur", () => {
          setNavModal(false);
          removeClickListener();
        });
        for (let i = 0; i < frames.length; ++i) {
          document
            .getElementById(frames[i].id)
            .removeEventListener("mouseover", function () {
              iframeDetector.iframeMouseOver = true;
            });
          document
            .getElementById(frames[i].id)
            .removeEventListener("mouseout", function () {
              iframeDetector.iframeMouseOver = false;
            });
        }
      };
      //Dont for get to add an ID to each of your iFrames
      const addListener = () => {
        for (let i = 0; i < frames.length; ++i) {
          document
            .getElementById(frames[i].id)
            .addEventListener("mouseover", function () {
              iframeDetector.iframeMouseOver = true;
            });
          document
            .getElementById(frames[i].id)
            .addEventListener("mouseout", function () {
              iframeDetector.iframeMouseOver = false;
            });
        }
        window.addEventListener("blur", () => {
          setNavModal(false);
          removeClickListener();
        });

        document.addEventListener("click", outsideClickListener);
      };

      navModal && addListener();
    }
    // hideOnClickOutside(linkList.current);
  }, [frames, navModal]);

  ////tests for over flow parents
  // useEffect(()=>{
  //   let parent = document.querySelector(".navBarTest").parentElement && document.querySelector(".navBarTest").parentElement;
  //   console.log(parent);
  //    while (parent) {
  //     const hasOverflow = getComputedStyle(parent).overflow;
  //     console.log(hasOverflow);
  //     if (hasOverflow !== "visible") {
  //       console.log(hasOverflow, parent);
  //     }
  //     parent = parent.parentElement;
  //   }
  // })

  return (
    <NavBarCont className='navBarTest' navModal={navModal}>
      <LogoIcon onClick={() => console.log("/")}>
        <img src={process.env.PUBLIC_URL + "/dev16Images/insureImages/logo.svg"} alt="INSURE" />
      </LogoIcon>

      <NavFolder>
        <LinkList ref={linkList} navModal={navModal}>
          <LinkCont>
            <NavLink onClick={() => console.log("/")}>
              HOW WE WORK
              <TabIndicator
                currentTab={location.pathname === "/" ? true : false}
              />
            </NavLink>
          </LinkCont>
          <LinkCont>
            <NavLink onClick={() => console.log("/portfolio")}>
              BLOG
              <TabIndicator
                currentTab={
                  location.pathname.includes("portfolio") ? true : false
                }
              />
            </NavLink>
          </LinkCont>
          <LinkCont>
            <NavLink onClick={() => console.log("/about")}>
              ACCOUNT
              <TabIndicator
                currentTab={location.pathname.includes("about") ? true : false}
              />
            </NavLink>
          </LinkCont>
          <LinkCont>
            <NavLink onClick={() => console.log("/contact")} highlight={true}>
              VIEW PLANS
              <TabIndicator
                currentTab={
                  location.pathname.includes("contact") ? true : false
                }
              />
            </NavLink>
          </LinkCont>
        </LinkList>
        <IconsList>
          <LinkCont>
            <SandwichIcon
              onClick={() => {
                setNavModal(!navModal);
              }}
            >
              <Line1 navModal={navModal} />
              <Line2 navModal={navModal} />
              <Line3 navModal={navModal} />
            </SandwichIcon>
          </LinkCont>
        </IconsList>
      </NavFolder>
    </NavBarCont>
  );
}
