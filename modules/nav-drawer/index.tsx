import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { muiPaper, A } from "./styles";
import { HamburgerIcon } from "./nav-icon";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState(open);
    };

  const Listed = () => (
    <Box>
      <List>
        {["Home", "Bio", "Posts", "Contact"].map((text) => (
          <ListItem key={text} disablePadding>
            <A href={"/" + text.toLowerCase()}>{text}</A>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <Button onClick={toggleDrawer(!state)} style={{ zIndex: "5" }}>
        <HamburgerIcon state={state} />
      </Button>
      <Drawer
        anchor="right"
        transitionDuration={200}
        open={state}
        onClose={toggleDrawer(false)}
        classes={{
          paper: muiPaper,
        }}
        style={{ zIndex: "2" }}
      >
        <Listed />
      </Drawer>
    </React.Fragment>
  );
}
