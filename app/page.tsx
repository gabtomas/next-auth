import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./utils/auth";
import SignOutButton from "@/components/SignOutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
    const session = await getServerSession(authOptions);

    return (
        <div className="p-10 flex flex-col items-center justify-center text-center">
            <h1 className="">Hello from public page </h1>
            {session ? (
                <div>
                    <h1 className="">Hello from private page </h1>
                    <SignOutButton />
                </div>
            ) : (
                <div>
                    <h1 className="">Please login </h1>
                    <Button asChild>
                        <Link href="/auth">Login</Link>
                    </Button>
                </div>
            )}
        </div>
    );
}
