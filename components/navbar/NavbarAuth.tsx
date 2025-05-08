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
            <Avatar className="size-12">
              <AvatarImage
                src={session?.user?.image || ""}
                alt={session?.user?.image || ""}
              ></AvatarImage>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col w-auto gap-2">
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button type="submit">SignOut</button>
            </form>
            <button>dfgdfg</button>
          </PopoverContent>
        </Popover>
      ) : (
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <button type="submit">SignIn</button>
        </form>
      )}
    </div>
  );
};

export default NavbarAuth;
