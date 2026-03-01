import "./Guns.css";
function Guns() {
  return (
    <>
    <div className="guns">
      <img
        className="guns-image"
        src="https://cdnb.artstation.com/p/assets/images/images/065/418/675/large/victor-stoll-2022-villain-r-evogun-lvl003-stoll-001-copy.jpg?1690313498"
        alt="Free Fire Weapons"
      />
      <div className="guns-content">
        <h1>Weapon Arsenal</h1>
        <p>Free Fire offers a wide variety of weapons for different combat styles.</p>
        <ul>
          <li>SMGs</li>
          <li>Assault Rifles</li>
          <li>Shotguns</li>
          <li>Sniper Rifles</li>
        </ul>
      </div>
      <img
        className="guns-image"
        src="https://i.pinimg.com/736x/41/ec/6a/41ec6a4e28c7e3872f27b20859fb7a61.jpg"
        alt="Free Fire Combat"
      />
      <div className="guns-content">
        <h1>Popular Guns</h1>
        <p>These weapons are commonly used in close and mid-range fights.</p>
        <ul>
          <li>MP40</li>
          <li>M1014</li>
          <li>AK</li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Guns;
