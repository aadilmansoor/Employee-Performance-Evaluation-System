import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

export default function ViewStudy() {
  return (
    <div className="wrapper">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 p-4">
        {[1, 2, 3, 4].map((doc) => (
          <div
            key={doc}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
          >
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View</span>
            </Link>
            <img
              alt={`Document ${doc}`}
              className="object-cover w-full h-60 group-hover:opacity-50 transition-opacity"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "300/300",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-semibold text-lg md:text-xl">{`Document ${doc}`}</h3>
            </div>
          </div>
        ))}
      </div>
      <Dialog>
        <DialogTrigger id="pdf-viewer" />
        <DialogContent className="bg-gray-950 text-gray-50 p-0 max-w-[90vw] max-h-[90vh]">
          <DialogHeader className="bg-gray-900 px-6 py-4 flex items-center justify-between">
            <DialogTitle>PDF Viewer</DialogTitle>
            <div>
              <Button
                className="text-gray-400 hover:text-gray-50"
                size="icon"
                variant="ghost"
              >
                <XIcon className="h-5 w-5" />
              </Button>
            </div>
          </DialogHeader>
          <div className="h-[80vh] w-full" />
        </DialogContent>
      </Dialog>
    </div>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
