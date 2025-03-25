import Modal from "../components/Modal";

export default function PanelsPage() {
  return (
    <section>
      <h2>Panels Layout</h2>
      <div className="panel">
        <img src="/example.jpg" alt="example panel image" />
        <p>Side-by-side layout with images and text</p>
      </div>
      <Modal />
    </section>
  );
}