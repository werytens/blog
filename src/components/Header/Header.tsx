import React from "react";
import MenuItem from "@mui/material/MenuItem";
import { COMMUNICATION_LIST } from "../../assets/data";
import {
  HeaderButton,
  HeaderDiv,
  HeaderLink,
  HeaderMenu,
} from "./Header.styles";
import { Box, Modal, Typography } from "@mui/material";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openModal, setOpenModal] = React.useState(false);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // TODO: fix opening modal on click communication

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isAuth = true;
  const nickname = "werytens";

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <HeaderDiv>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

      {nickname}
      <section>
        <HeaderButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="outlined"
        >
          Communication
        </HeaderButton>
        <HeaderMenu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              background: "#2e2d2d",
            },
          }}
        >
          {COMMUNICATION_LIST.map((item) => (
            <MenuItem key={item.id} onClick={handleClose}>
              <HeaderLink href={item.link} underline="hover">
                {item.name}
              </HeaderLink>
            </MenuItem>
          ))}
          {isAuth ? (
            <MenuItem onClick={handleClose}>
              <HeaderButton variant="outlined" onClick={handleOpenModal}>
                LOGIN
              </HeaderButton>
            </MenuItem>
          ) : null}
        </HeaderMenu>
      </section>
    </HeaderDiv>
  );
};

export default Header;
