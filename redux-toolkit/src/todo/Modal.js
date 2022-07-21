export default function Modal({ close, name, data }) {
  return (
    <>
      <div>Modal component</div>
      <button onClick={close}>Close</button>
    </>
  );
}
