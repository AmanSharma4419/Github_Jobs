import React from "react";
import Button from "@material-ui/core/Button";

export default function landingPage() {
  return (
    <>
      <div style={textAlignment}>
        <p>Welcome to job search get your dream job!</p>
        <p>Click Below </p>
        <Button variant="contained" color="secondary">
          Get Jobs
        </Button>
      </div>
    </>
  );
}

// styles
const textAlignment = { textAlign: "center" };
