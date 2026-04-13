import { Link } from "react-router-dom";

function Settings() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-primary dark:bg-primary-dark">
      <h1 className="text-4xl text-black">Settings</h1>

      <Link to="/" className="text-black underline">
        Go Home
      </Link>
    </div>
  );
}

export default Settings;
