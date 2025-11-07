import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col text-white items-center justify-center min-h-screen gap-4 bg-secondary">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-2xl">Page Not Found</h2>
      <p className="">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button variant="primary">
        <Link href="/">Go to Home</Link>
      </Button>
    </div>
  );
}
