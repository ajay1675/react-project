import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <img
          className="home-image"
          src="https://wallpapers.com/images/hd/free-fire-4k-bunny-and-clown-costumes-vgep79l0ulkdwc24.jpg"
          alt="FREE FIRE"
        />

        <div className="home-content">
          <h1>WELCOME TO THE BATTLEFIELD!</h1>
          <p>
            Free Fire is a fast-paced battle royale game where players fight to be the
            last one standing. It is packed with action, survival skills, and intense
            combat.
          </p>
        </div>

        <div className="home-content">
          <h1>SKILLS, STRATEGY & SURVIVAL</h1>
          <p>
            Free Fire focuses on quick decision-making and smart strategies. Players
            use unique characters, abilities, and teamwork to dominate the battlefield.
          </p>
        </div>

        <div className="home-content">
          <h1>FREE FIRE COMMUNITY</h1>
          <p>
            Free Fire has a massive global community. Players compete in tournaments,
            stream gameplay, and connect with friends through exciting matches.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
