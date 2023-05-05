import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
      <div className="ErrorPage">
        <h1>Error Page Not Found!</h1>
        <Link to='/'>Go back to <span>Home</span></Link>
      </div>
    );
  }