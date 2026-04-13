import { Link } from "react-router-dom";

function About() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-primary dark:bg-primary-dark">
      <h1 className="text-4xl dark:text-white">About Page</h1>

      <p className="dark:text-white text-lg max-w-md text-center">
        This is a simple app using TailwindCSS v4, Dark Mode, and React Router.
      </p>

      <Link to="/" className="dark:text-white underline">
        Go Home
      </Link>
    </div>
  );
}

export default About;
