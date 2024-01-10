"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

export default function SignOutButton() {
    async function handleSignOut() {
        const signOutResult = await signOut({
            //callback should be the same as Im on logged in which is /
            callbackUrl: `${window.location.origin}/`,
        });
    }

    return (
        <Button className="mt-6" variant={"secondary"} onClick={handleSignOut}>
            Log Out
        </Button>
    );
}
