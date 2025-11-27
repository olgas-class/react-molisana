export default function Alert({ type, children }) {
  return <div className={`alert alert-${type}`}>{children}</div>;
}
