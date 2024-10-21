import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  isLoading: boolean;
  className?: string;
}

function SubmitButton({ isLoading, className, children }: ButtonProps) {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={className ?? "shad-primary-btn w-full"}
    >
      {isLoading ? (
        <div className="flex gap-4 items-center">
          <Image
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
}

export default SubmitButton;
