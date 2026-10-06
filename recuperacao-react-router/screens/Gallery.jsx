import './Gallery.css';

export default function Gallery() {
  const images = Array(10).fill('/placeholder-gallery.jpg');

  return (
    <main className="page-container">
      <h1 className="page-title">
        Photo <span>Gallery</span>
      </h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt={`Gallery item ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="pagination-controls">
        <div className="pages">
          <span className="current-page">01</span>
          <span>/</span>
          <span>02</span>
        </div>
        <button className="arrow-btn">←</button>
        <button className="arrow-btn">→</button>
      </div>
    </main>
  );
}