import React from "react";

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://jobs.github.com/positions.json?page=2&search=code";

export default class FetchJobs extends React.Component {
  static async FetchGithubJobs() {
    return await fetch(proxyUrl + baseUrl, {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then((res) => {
      return res.json();
    });
  }
}
