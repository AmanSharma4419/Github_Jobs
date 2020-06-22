import React, { useState, useEffect } from "react";
import FetchJobs from "./FetchingJobs";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AllJobs() {
  const [initialState, setinitialState] = useState({ jobsList: "" });

  useEffect(() => {
    FetchJobs.FetchGithubJobs().then(
      (allJobs) => setinitialState((initialState.jobsList = allJobs)),
      console.log(initialState)
    );
  }, []);
  return (
    <>
      <p style={textAlignment}>Here you can findout suitable jobs</p>
      <div className={useStyles.root}>
        {initialState !== "" &&
          Object.keys(initialState).map((key, index) => {
            return (
              <>
                <List component="nav" aria-label="main mailbox folders">
                  <ListItem>
                    Company Name
                    <ListItemText primary={initialState[key].company} />
                  </ListItem>
                  <ListItem>
                    Company Url
                    <ListItemText primary={initialState[key].company_url} />
                  </ListItem>
                </List>
                <ListItem>
                  Company Location
                  <ListItemText primary={initialState[key].location} />
                </ListItem>
                <ListItem>
                  Company Title
                  <ListItemText primary={initialState[key].title} />
                </ListItem>
                <ListItem>
                  Job Type
                  <ListItemText primary={initialState[key].type} />
                </ListItem>
                <ListItem>
                  Apply
                  <ListItemText primary={initialState[key].url} />
                </ListItem>
                <Divider />
              </>
            );
          })}
      </div>
    </>
  );
}

// styles
const textAlignment = { textAlign: "center" };
