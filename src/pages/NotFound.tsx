import { Link } from "react-router-dom";
import { useMeta } from "../hooks/useMeta";

export default function NotFound() {
  useMeta("Page not found", "The page you were looking for does not exist.");
  return (
    <section className="page-head">
      <div className="container narrow">
        <h1>That page doesn't exist.</h1>
        <p className="lead">It may have moved. Try one of these instead.</p>
        <div className="btn-row">
          <Link to="/" className="btn btn-primary">Home</Link>
          <Link to="/services" className="btn btn-secondary">Services</Link>
          <Link to="/contact" className="btn btn-secondary">Contact</Link>
        </div>
      </div>
    </section>
  );
}
