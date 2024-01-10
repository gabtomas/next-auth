"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "./ui/use-toast";

export default function SignInForm() {
    const [email, setEmail] = useState<null | string>(null);

    async function handleSubmit() {
        // fetch api to send email
        const signInResult = await signIn("email", {
            email,
            callbackUrl: `${window.location.origin}`,
            redirect: false, // do not redirect to /auth/callback to dont see nextAuth (their) auth page (check your email)
        });

        //toast notification to check email
        if (!signInResult?.ok) {
            return toast({
                title: "Well this doesn't look right",
                description: "Something went wrong",
                variant: "destructive",
            });
        } else {
            return toast({
                title: "Check your email",
                description: "We've sent you a sign in link",
                variant: "default",
            });
        }
    }
    return (
        <form action={handleSubmit}>
            <div className="flex flex-col gap-y-2">
                <Label>Email</Label>
                <Input
                    placeholder="name@example.com"
                    type="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <Button type="submit" className="mt-4 w-full">
                Login with email
            </Button>
        </form>
    );
}
