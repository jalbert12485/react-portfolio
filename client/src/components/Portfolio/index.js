import React from "react";
import "../../index.css";
import ProjectCard from "../ProjectCard";
import projects from "./projects.json";

const styles = {
  background: {
    backgroundColor: "white"
  },
  project: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "black",
    height: "100%"
  }
};

// creates the content that will be rendered in App.js
class Portfolio extends React.Component  {

  state = {
    "projects": projects
  };

  render(){
  return (
    <main className="container mr-auto ml-auto " >
    <div className="row">
      <div className="col-md-10 col-sm-12 aboutcont" style={styles.background}>
    <section className="row" >
        <h1  className="boxheader">Portfolio</h1>

    </section>
    <section className="row" id="portfolio-input" >
            {this.state.projects.map(project =>
          <ProjectCard project={project} />
        )}
      
    </section>
  </div>
</div>
  </main>
  );}
}

export default Portfolio;