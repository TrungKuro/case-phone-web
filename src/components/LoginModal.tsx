import { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

import Image from "next/image";
import snake from "../../public/snake-1.png";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { buttonVariants } from "./ui/button";

const LoginModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className="absolute z-[999999]">
        <DialogHeader>
          <div className="relative mx-auto mb-2 w-24 h-24">
            <Image fill src={snake} alt="snake" className="object-contain" />
          </div>
        </DialogHeader>

        <DialogTitle className="text-3xl text-center font-bold tracking-tight text-gray-900">
          Login to continue
        </DialogTitle>

        <DialogDescription className="text-base text-center py-2">
          <span className="font-medium text-zinc-900">
            Your configuration was saved!
          </span>{" "}
          Please login or create an account to complete your purchase.
        </DialogDescription>

        <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
          <LoginLink className={buttonVariants({ variant: "outline" })}>
            Login
          </LoginLink>
          <RegisterLink className={buttonVariants({ variant: "default" })}>
            Sign up
          </RegisterLink>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
