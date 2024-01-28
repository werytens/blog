import { Button, Link, Menu, styled } from "@mui/material";

export const HeaderDiv = styled("div")`
  margin-left: 250px;
  margin-right: 250px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3a3a3a;
  border-radius: 6px;
  margin-top: 15px;
`;

export const HeaderButton = styled(Button)`
  color: #f1be70;
  border: 1px solid #f1be70;
  :hover {
    color: white;
    border: 1px solid white;
  }
`;

export const HeaderLink = styled(Link)`
  color: #f1be70;
`;

export const HeaderMenu = styled(Menu)`
  color: black;
`;
