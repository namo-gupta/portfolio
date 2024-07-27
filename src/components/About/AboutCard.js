import React from "react";
import Card from "react-bootstrap/Card";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
     
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Namo Gupta </span>
            from <span className="purple"> Kanpur, India.</span>
            <br />
            I'm currently seeking job opportunities in software development. I previously worked as a <span className="purple">Frontend Developer</span> at Zopsmart. 
            <br />
            I hold a Master's degree in Computer Applications (MCA) from <span className="purple">NIT Jamshedpur</span>.
          </p>
         
      </Card.Body>
    </Card>
  );
}

export default AboutCard;