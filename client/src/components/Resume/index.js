import React from "react";
import "../../index.css";
import "./resume-style.css";


const styles = {
  background: {
    backgroundColor: "white"
  }
};

// creates the content that will be rendered in App.js
function Resume(props) {
  return (

    <main className="container mr-auto ml-auto " >
    <div className="row">
      <div className="col-sm-12 col-md-10 aboutcont" style={styles.background}>
      <header className="row pt-2">
        <div className="col-md-2 col-sm-4">
			<img src="/img/wedding-060-e1534810309455.jpg" alt="Justin Albert" id="headshot"/>
		</div>
        <section  className="col-md-4 col-sm-8">
        <h1> Dr. Justin Albert  </h1> 
        <h2> Web Development </h2>
        </section>
        <section className="col-md-3 col-sm-6">
            <ul className="nolist">
                <li> <strong>&#9742; </strong>(262)492-0137</li>
                <li> <strong>&#128187;  </strong><a href="https://dralb.com" target="_blank" rel="noreferrer">dralb.com</a></li>
                <li> <strong>&#128231; </strong><a href="mailto:drjustinalbert@gmail.com" target="_blank" rel="noreferrer">drjustinalbert@gmail.com</a></li>
            </ul>
        </section>
        <section className="col-md-3 col-sm-6">
            <ul className="nolist">
                <li> <strong>Github: </strong><a href="https://github.com/jalbert12485" target="_blank" rel="noreferrer">jalbert12485</a></li>
                <li> <strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/justin-albert-a246351b3/" target="_blank" rel="noreferrer">Justin Albert</a></li>
                <li> <strong>Pdf Version: </strong><a href="/img/albert-resume.pdf" target="_blank" rel="noreferrer">Open</a></li>
            </ul>
        </section>
    </header>

    <main className="row">
        <h3 className="col-md-4">Profile</h3>

        <p  className="col-md-8"> A mathematician turned web developer looking for an opportunity to use his vast technical and publishing experience to help create websites, algorithms and more.</p>
    </main>

    <main id="education" className="row">
            <h3 className="col-md-4">Education</h3>
            <div className="col-md-8">
                <p> <strong>Ph.D.</strong> in Mathematics, <em>Marquette University</em>, Milwaukee, WI. Dec. 2012 </p>
                <p> <strong>B.A.</strong> in Mathematics and Music, <em>Carthage College</em>, Kenosha, WI. May 2006 </p>
            </div>
    </main>
 
    <main id="cert" className="row">
        <h4 className="col-md-4">Certificates</h4>
       
        <div className="col-md-8">
            <p> <strong>Full-Stack Development</strong>, <em>Northwestern University</em>, Evanston, IL. Dec. 2020 </p>
        </div>
    </main>

    

    <main id="experience" className="row">
        <h3 className="col-md-4">Experience</h3>
        <div className="col-md-8">
            <p > <strong>Instructor</strong>, <em>Virginia Commonwealth University</em>, Aug. 2016 to May 2020 </p>
            <p > <strong>Assistant Professor</strong>, <em>Carthage College</em>, Jan. 2013 to May 2016 </p>
            <p > <strong>Lecturer</strong>, <em>Alverno College</em>, Aug. 2012 to Dec. 2012 </p>
            <p > <strong>Adjunct Faculty</strong>, <em>Marquette University</em>, Aug. 2006 to Dec. 2012 </p>
        </div>
    </main>

    <main id="publications" className="row">
        <h3 className="col-md-4">Publications</h3>
        <div className="col-md-8">
            <p><strong>Bands with High Symmetry and Uniform Bands</strong></p>
            <a href="https://epublications.marquette.edu/dissertations_mu/222/" target="_blank" rel="noreferrer"><p>Albert, J. (2012). <em>Bands with high symmetry and uniform bands.</em> Doctoral dissertation, Marquette University, Milwaukee.</p></a>
            <p><strong>Free Split Bands</strong></p>
            <a href="https://epublications.marquette.edu/mscs_fac/435/" target="_blank" rel="noreferrer"><p>Pastijn, F., Albert, J. Free split bands. <em>Semigroup Forum</em> 90 (2015): 753-762.</p></a>
            <p><strong>Semilattice Transversals of Regular Bands I</strong></p>
            <a href="https://www.tandfonline.com/doi/abs/10.1080/00927872.2017.1288735#:~:text=Every%20regular%20band%20can%20be,lattice%20of%20regular%20band%20varieties." target="_blank" rel="noreferrer"><p>Pastijn, F., Albert, J. Semilattice transversals of regular bands I. <em>Communications in Algebra</em> 45 (2017): 4979-4991. </p></a>
            <p><strong>Semilattice Transversals of Regular Bands II</strong></p>
            <a href="https://link.springer.com/article/10.1007/s00233-017-9863-8" target="_blank" rel="noreferrer"><p>Pastijn, F., Albert, J. Semilattice transversals of regular bands II. <em>Semigroup Forum</em> 95 (2017): 423-440.</p></a>
            <p><strong>Uniform Bands</strong></p>
            <a href="https://epublications.marquette.edu/mscs_fac/255/" target="_blank" rel="noreferrer"><p>Albert, J., Pastijn, F. Uniform bands. <em>Proceedings of the Edinburgh Mathematical Society</em> (2) 57 (2014): 575-587.</p></a>
        </div>
    </main>


  </div>
</div>
  </main>


  );
}

export default Resume;