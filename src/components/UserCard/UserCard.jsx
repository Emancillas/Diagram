import { Avatar, Button } from "@mui/material";
import { CardContainer } from "./CardContainer";
import { Container } from "./Container";
import PersonIcon from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";

const UserCard = ({ username, job, url, email }) => {
  return (
    <>
      <CardContainer>
        <Avatar
          sx={{
            bgcolor: "gray",
            width: "60px",
            height: "60px",
            boxShadow: "1px 1px 3px #c2c2c2",
            marginLeft: "-130px",
            marginTop: "-20px",
            position: "absolute",
            zIndex: "4",
          }}
          alt="Geraldine D. Salmeron"
          src={`/assets/${url}`}
          variant="circular"
        />
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: "5px",
              margin:  '3px 0',
            }}
          >
            <PersonIcon
              sx={{
                width: "8px",
                height: "8px",
                margin: "auto",
                color: "#B1B2FF",
              }}
            />
            <p
              style={{
                fontSize: "8px",
                fontWeight: "bold",
                color: "#B1B2FF",
                margin: 0,
                paddingLeft: "3px",
              }}
            >
              {username}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "fit-content",
              alignItems: "center",
              paddingLeft: "5px",
              margin:  '3px 0',
            }}
          >
            <WorkIcon
              sx={{
                width: "8px",
                height: "8px",
                margin: "auto",
                color: "#AAC4FF",
              }}
            />
            <p
              style={{
                fontSize: "6px",
                paddingLeft: "3px",
                color: "#AAC4FF",
                margin: 0,
              }}
            >
              {job}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: "5px",
              margin:  '3px 0',
            }}
          >
            <EmailIcon sx={{
                width: "8px",
                height: "8px",
                margin: "auto",
                color: "#96969686",
              }}/>
            <span
              style={{
                fontSize: "5px",
                paddingLeft: "3px",
                color: "#96969686",
                margin: 0,
              }}
            >
              {email}
            </span>
          </div>
        </Container>
      </CardContainer>
    </>
  );
};

export { UserCard };
