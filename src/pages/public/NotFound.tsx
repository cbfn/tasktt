import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <dl>
        <dt>404</dt>
        <dd>Page not found</dd>
      </dl>
      <Link to="/" className="btn-link">
        Go to home
      </Link>
    </div>
  );
}
