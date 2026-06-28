import { X } from "lucide-react";
import { Alert, AlertTitle } from "@/components/ui/alert";
import Banner from "../../assets/Banner.png";
import { Button } from "../ui/button";
import { useState } from "react";

const ComboBox = () => {
  const [isOpened, setIsOpened] = useState(true);
  if (!isOpened) return null;
  return (
    <div className="grid w-full ">
      <Alert
        className="rounded-none border-0"
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <div className="flex items-center justify-between py-3">
          <AlertTitle className="text-center text-2xl m-0 flex-1">
            ✨ Discover Your Dream Property with DreamEstate.
            <span className="underline cursor-pointer ml-2">Learn More</span>
          </AlertTitle>

          <Button
            variant="ghost"
            className="hover:bg-gray-800  h-12 w-12  "
            onClick={() => setIsOpened(false)}
          >
            <X className=" stroke-6" />
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default ComboBox;
