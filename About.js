import "./About.css";
function About() {
  return (
    <>
    <div className="about">
  <img
    className="about-image"
    src="https://i.pinimg.com/736x/0b/1e/c5/0b1ec5b0678518d7842bfdd7bee029f5.jpg"
    alt="Free Fire Banner"
  />

  <div className="about-content">
    <h1>About Free Fire</h1>
    <p>
      Free Fire is a popular battle royale game developed by Garena. It is known
      for fast-paced gameplay, unique characters, and intense survival battles
      that keep players engaged.
    </p>
  </div>

  <img
    className="about-image"
    src="https://cdn.wallpapersafari.com/6/56/m3N8qa.jpg"
    alt="Free Fire Gameplay"
  />

  <div className="about-content">
    <h1>Skills & Strategy</h1>
    <p>
      Free Fire is not just about shooting—it requires smart strategies and quick
      decisions. Players use character abilities, weapons, and teamwork to gain
      an advantage and secure victory.
    </p>
  </div>
</div>

    </>
  );
}

export default About;
