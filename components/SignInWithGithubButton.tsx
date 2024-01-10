"use client";

import { GithubIcon } from "lucide-react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";

export default function SignInWithGithubButton() {
    return (
        <Button
            className="mt-6"
            variant={"secondary"}
            onClick={() =>
                signIn("github", {
                    f: `${window.location.origin}/`,
                })
            }
        >
            Login with github <GithubIcon className="pl-2" />
        </Button>
    );
}
