import React from "react";
import "../../index.css";

const style={
  background: {
    backgroundColor: "white"
  }
}


// creates the content that will be rendered in App.js
function Contact(props) {
  return (
    <main className="container mr-auto ml-auto " >
    <div className="row">
      <div className="col-md-10 col-sm-12 aboutcont" style={style.background}>
    <section className="row" >
        <h1  className="boxheader">Contact</h1>
    
    </section>
    <section className="row m-2">
      <div className="col">
        <a href="https://www.linkedin.com/in/justin-albert-a246351b3/" target="_blank" rel="noreferrer"  className="fa fa-linkedin p-2 icon-font"> </a>
      </div>
      <div className="col">
        <a href="https://github.com/jalbert12485" target="_blank" rel="noreferrer" className="fa fa-github p-2 icon-font"> </a>
      </div>
      <div className="col">
        <a href="mailto:drjustinalbert@gmail.com" target="_blank" rel="noreferrer" className="icon-font">&#128231;</a>
      </div>
      <div className="col">
        <button className="icon-font" data-toggle="modal" data-target="#exampleModal">&#9742;</button>
      </div>
    </section>

    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="exampleModalLabel">Phone Number</h3>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <h4>(262)492-1037</h4>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <section className="row">

          <form className="col-12">
            <div className="form-group">
              <label for="exampleInputName1">Name</label>
              <input type="email" className="form-control" id="exampleInputName1" placeholder="Enter Name"/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button id="submitbutton" type="submit" className="btn btn-primary">Submit</button>
          </form>
        </section>
      </div>
    </div>

  </main>

  );
}

export default Contact;
