import React from "react";
import "../../index.css";


const style={
  background: {
    backgroundColor: "white"
  },
  aboutimg: {
    float: "left",
    margin: "20px",
    width: "200px",
},
  floatLeft: {
    float: "left"
  }
}

// creates the content that will be rendered in App.js
function About(props) {
  return (
    <main className="container mr-auto ml-auto " >
        <div className="row">
          <div className="col-md-10 col-sm-12 aboutcont" style={style.background}>
        <section className="row" >
            <h1  className="boxheader">About Me</h1>
        
        </section>
        <section className="row">
            <article >
              <section >
            <img src="img/wedding-060-e1534810309455 (1).jpg" alt="About Me" id="aboutimg"/>

              <p> Justin Albert is a mathematician turned web-developer.  He completed his bachelors at Carthage College.  After this, he went to graduate school at Marquette University.  During his time there, he taught classes and researched for his dissertation with his advisor Francis Pastijn.  In his dissertation he was able to find a large className of algebras that, although not necessarily initially having a lot of symmetry, could be embedded into algebras with symmetry.  He describes how to do this algorithmically, which then allows for the using properties of nice algebras to find this in less nice algebras.  </p>
              <p>As Justin finished graduate school he began teaching mathematics at the college level.  During this time, he taught a wide range of classes; however, his favorite were those that focused on logic and algorithms.  His research further focused on algorithmically describing processes that allow starting with arbitrary algebras and end up in ones that had desired properties.</p>
              <p>During his time teaching, he has come to realize that whole of education was changing and transferring online.  He began creating materials for students online and saw that the process of website creation itself was something he was very excited about.  With the onset of covid-19 and the chaos that ensued in academia, he decided it was a good time to pursue this interest at a professional level and enrolled in a coding boot camp to learn more than he could on his own.</p>
              <p>Now, he is excited and committed to developing and writing websites.</p>
              </section>
            </article>
            </section>
          </div>
        </div>

      </main>
  );
}

export default About;