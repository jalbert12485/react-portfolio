import React from "react";
import "../../index.css";

const styles={
  card: {
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "black",
    overflow: "hidden"
  }
}

// creates the content that will be rendered in App.js
function Project(props) {
  let deploy=false;
  if(props.project.deployatgithub){
    deploy="https://jalbert12485.github.io/"+props.project.dashname;
  }else if(props.project.deployelsewhere){
    deploy=props.project.deployelse;
  }

  let style={
    deployButton: {
      display: "block"
    }
  }


  if(!deploy){
    style.deployButton.display= "none";
  }else{
    style.deployButton.display= "block";
  }

  return (
    
    <div className="row m-2 card" style={styles.card}>
      <h2  className="boxheader">{props.project.name}</h2>
      <img className="card-img-top" alt={props.project.name} src={"./img/"+ props.project.dashname+".png"} />


      <div className="card-body">
        <h5 className="card-title">{props.project.name}</h5>
        <p className="card-text">{props.project.description}</p>
        <div className="row">
        <div className="col-md-6 col-sm-12 text-center" style={style.deployButton}>
        <a href={deploy}  className="btn btn-primary " target="_blank" rel="noreferrer">Deployed Link</a>
        </div>
        <div className="col-md-6 col-sm-12 text-center">
        <a href={"https://github.com/jalbert12485/"+props.project.dashname} className="btn btn-primary" target="_blank" rel="noreferrer">Repo Link</a>
        </div>
        </div>
      </div>
    </div>

    
  );
}

export default Project;