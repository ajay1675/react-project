import "./Maps.css";
function Maps() {
  return (
    <>
    <div className="maps">

      <img
        className="maps-image"
        src="https://i0.wp.com/gamingonphone.com/wp-content/uploads/2020/09/bermuda-map_compress35-1024x1018.jpg"
        alt="Bermuda"
      />
      <div className="maps-content">
        <h1>Bermuda</h1>
        <p>The most popular Free Fire map with balanced zones and intense combat.</p>
      </div>

      <img
        className="maps-image"
        src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Kalahari_Map.png"
        alt="Kalahari"
      />
      <div className="maps-content">
        <h1>Kalahari</h1>
        <p>Desert map filled with zip lines and close-range firefights.</p>
      </div>

      <img
        className="maps-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuJAUjM9UD9k-YjBURg2mDZ-xD-W5TX4u1SQ&s"
        alt="Purgatory"
      />
      <div className="maps-content">
        <h1>Purgatory</h1>
        <p>A large map offering a mix of open fields and dense urban areas.</p>
      </div>

      <img
        className="maps-image"
        src="https://i0.wp.com/gamingonphone.com/wp-content/uploads/2021/12/free-fire-map-1024x479.jpg"
        alt="Alpine"
      />
      <div className="maps-content">
        <h1>Alpine</h1>
        <p>Snow-covered map with vertical gameplay and tactical positioning.</p>
      </div>
    </div>
    </>
  );
}

export default Maps;
