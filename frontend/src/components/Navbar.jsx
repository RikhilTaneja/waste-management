import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { TbMoneybag } from "react-icons/tb";
import { BiSolidUserVoice } from "react-icons/bi";
import { MdOutlineAutoGraph } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { TbLogin2 } from "react-icons/tb";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 800);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="nav-parent">
      <nav className="flex">
        <div className="nav-parent-2 flex">
          <div className="nav-logo">
            <div>Title</div>
          </div>
          <div className="nav-options flex">
            {isMobile ? (
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<HamburgerIcon color="white" />}
                  variant="outline"
                  _hover={{ bg: "darkgreen" }}
                  _active={{ bg: "green" }}
                  sx={{ borderColor: "transparent" }} // Set border color to transparent
                />
                <MenuList>
                  <MenuItem icon={<BiSolidUserVoice />}>Raise a Voice</MenuItem>
                  <MenuItem icon={<TbMoneybag />}>Donations</MenuItem>
                  <MenuItem icon={<MdOutlineAutoGraph />}>Incentives</MenuItem>
                  <MenuItem icon={<RiTeamFill />}>About Us</MenuItem>
                  <MenuItem icon={<TbLogin2 />}>Login / Signup</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <>
                <Menu>
                  <MenuButton
                    as={Button}
                    rightIcon={<ChevronDownIcon />}
                    sx={{
                      backgroundColor: "green",
                      color: "white",
                      ":hover": {
                        backgroundColor: "darkgreen",
                      },
                      ":active": {
                        backgroundColor: "green",
                      },
                    }}
                  >
                    Services
                  </MenuButton>
                  <MenuList>
                    <MenuItem minH="40px">
                      <BiSolidUserVoice />
                      &nbsp;
                      <span>Raise a Voice</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <TbMoneybag />
                      &nbsp;
                      <span>Donations</span>
                    </MenuItem>
                    <MenuItem minH="40px">
                      <MdOutlineAutoGraph />
                      &nbsp;
                      <span>Incentives</span>
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Menu>
                  <MenuButton
                    as={Button}
                    leftIcon={<RiTeamFill />}
                    sx={{
                      backgroundColor: "green",
                      color: "white",
                      ":hover": {
                        backgroundColor: "darkgreen",
                      },
                      ":active": {
                        backgroundColor: "green",
                      },
                    }}
                  >
                    About Us
                  </MenuButton>
                </Menu>

                <Menu>
                  <MenuButton
                    as={Button}
                    leftIcon={<TbLogin2 />}
                    sx={{
                      backgroundColor: "green",
                      color: "white",
                      ":hover": {
                        backgroundColor: "green",
                      },
                      ":active": {
                        backgroundColor: "green",
                      },
                    }}
                  >
                    Login / Signup
                  </MenuButton>
                </Menu>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
