import Modal from "../components/Modal";

export default function PanelsPage() {
  return (
    <section>
      <h2>Panels Layout for Northeastern University</h2>
      <div className="panel">
        <img src="./src/assets/NU.png" alt="example panel image" />
        <p>Offering industry-aligned graduate programs to meet Toronto’s talent needs and partnering to advance shared research and innovation priorities.</p>
      </div>
      <Modal />
    </section>
  );
}