import styled from "@emotion/styled";
import { Button, CardHeader } from "@mui/material";
import { formatDistance, subDays } from "date-fns";
import TelegramIcon from "@mui/icons-material/Telegram";
import IconButton from "@mui/material/IconButton";

const HeaderDiv = styled("div")`
  margin-left: 250px;
  margin-right: 250px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3a3a3a;
`;

const Header = () => {
  return (
    <HeaderDiv>
      Hellraze
      <section>
      <Button
        startIcon={<TelegramIcon />}
        variant="contained"
        color="primary"
      >
        TG
      </Button>
      </section>
      <Button variant="contained" color="primary">
        LOGIN
      </Button>
    </HeaderDiv>
  );
};

export default Header;
