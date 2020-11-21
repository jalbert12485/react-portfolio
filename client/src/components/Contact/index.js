import React from "react";
import "../../index.css";
import axios from 'axios';

let style={
  background: {
    backgroundColor: "white"
  },
  thankyou: {
    display: "none"
  }
}


// creates the content that will be rendered in App.js
function Contact(props) {

  const [formState, setFormState] = React.useState({
    display: "none",
    email: "",
    text: "",
    name: "",
    body: {
      "from": "",
      "to": "jalbert@carthage.edu",
      "subject": "",
      "text": ""
    }
  });

  const handleInputChange= (option, event) =>{
    formState[option]=event;
    setFormState({...formState, formState});
    changeBody();
  };


  const changeBody= ()=> {
    setFormState({
      ...formState,
      body: {
        "from": formState.email,
        "to": "jalbert@carthage.edu",
        "subject": "Message from "+ formState.name + " at " + formState.email,
        "text": formState.text
      }
    })
  };


const handleSubmit=(e)=>{
  e.preventDefault();
// axios.post('/emailme', formState.body)
//   .then(function (res) {
      document.querySelector("#exampleInputName1").disabled=true;
      document.querySelector("#exampleInputEmail1").disabled=true;
      document.querySelector("#exampleFormControlTextarea1").disabled=true;
      document.querySelector("#submitbutton").disabled=true;
      setFormState( {...formState, display: "block"});
    // })
 };

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

          <form className="col-12" onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="exampleInputName1">Name</label>
              <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter Name"   onChange={(e) =>{
            handleInputChange("name", e.target.value);
          }}/>
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input onChange={(e) =>{
            handleInputChange("email", e.target.value);
          }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea onChange={(e) =>{
            handleInputChange("text", e.target.value);
          }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button id="submitbutton" type="submit" className="btn btn-primary">Submit</button>
          </form>
          <p style={{display: formState.display}}> Thank you {formState.name} your email has been sent.</p>
        </section>
      </div>
    </div>

  </main>

  );
}

export default Contact;
