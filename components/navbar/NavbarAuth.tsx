import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { auth, signIn, signOut } from "@/auth";
import { Avatar, AvatarImage } from "../ui/avatar";

const NavbarAuth = async () => {
  const session = await auth();

  return (
    <div>
      {session && session?.user ? (
        <Popover>
          <PopoverTrigger>
            <Avatar className="size-12 cursor-pointer">
              <AvatarImage
                src={session?.user?.image || ""}
                alt={session?.user?.image || ""}
              ></AvatarImage>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col w-auto gap-2 hover:bg-bg transition-all duration-500 cursor-pointer">
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit" className="cursor-pointer">
                Logout
              </button>
            </form>
          </PopoverContent>
        </Popover>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <button
            type="submit"
            className="hover:bg-accent hover:text-black transition-all duration-500 rounded-md px-3 py-1.5"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default NavbarAuth;
