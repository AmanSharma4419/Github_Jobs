import React, { useState, useEffect } from "react";
import FetchJobs from "./FetchingJobs";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});
export default function AllJobs() {
  const [initialState, setinitialState] = useState({
    jobsList: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    FetchJobs.FetchGithubJobs().then(
      (allJobs) => setinitialState((initialState.jobsList = allJobs)),
      setIsLoading(false)
    );
  }, []);
  return (
    <>
      <p style={textAlignment}>Here you can findout suitable jobs</p>
      <div>
        {initialState !== "" &&
          Object.keys(initialState).map((key, index) => {
            return (
              <>
                {isLoading ? (
                  <div style={textAlignment}>
                    <CircularProgress />
                  </div>
                ) : (
                  <>
                    <Card className={useStyles.root}>
                      <CardContent>
                        <Typography
                          className={useStyles.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          <strong>Company Name</strong> :-
                          {initialState[key].company}
                        </Typography>

                        <Typography
                          className={useStyles.pos}
                          color="textSecondary"
                        >
                          <a
                            className={useStyles.pos}
                            href={initialState[key].company_url}
                          >
                            <strong>Company Url</strong> :-
                          </a>
                          {initialState[key].company_url
                            ? initialState[key].company_url
                            : "Url is not metioned"}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          <strong>Title</strong> :- {initialState[key].title}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          <strong> Location</strong>:-{" "}
                          {initialState[key].location}
                          <br />
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                          <strong> Type</strong> :- {initialState[key].type}
                        </Typography>
                      </CardContent>
                    </Card>
                    <br />
                  </>
                )}
              </>
            );
          })}
      </div>
    </>
  );
}

// styles
const textAlignment = { textAlign: "center" };
