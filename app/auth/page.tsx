import SignInWithGithubButton from "@/components/SignInWithGithubButton";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GithubIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { authOptions } from "../utils/auth";
import SignInForm from "@/components/SignInForm";

export default async function AuthPage() {
    const session = await getServerSession(authOptions);

    if (session) {
        redirect("/");
    }

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <Card>
                <CardHeader>
                    {/* <CardTitle>Please sign in</CardTitle> */}
                    {/* <CardDescription>
                        Sign in to your account to continue
                    </CardDescription> */}
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col">
                        <SignInForm />
                        <SignInWithGithubButton />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
