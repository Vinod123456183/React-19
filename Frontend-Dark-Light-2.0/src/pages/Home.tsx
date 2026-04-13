import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-primary dark:bg-primary-dark">
      <h1 className="text-4xl dark:text-white">Home Page</h1>

      <Button className="dark:text-red-500">Click me</Button>

      <div className="flex gap-4">
        <Link to="/about" className="dark:text-white underline">
          About
        </Link>
        <Link to="/settings" className="dark:text-white underline">
          Settings
        </Link>
      </div>
    </div>
  );
}

export default Home;
