'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const user = auth.currentUser;
  const userName = user?.displayName ? user.displayName : user?.email;

  console.log("Current user:", user);

  const handleLogout = () => {
    signOut(auth).then(() => {
      router.push("/");
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  }

  return (
    <>
      <header>
        <h1 className="text-4xl mt-8 mb-8">Profile</h1>
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={user?.photoURL || ""} alt={userName || "User avatar"} />
            <AvatarFallback>{userName?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
          </Avatar>
          <h2 className="text-lg">{userName}</h2>
        </div>
      </header>
      <main className="border-t mt-6">
        <Button onClick={handleLogout} className="mt-8 mb-16 w-full" variant="secondary">
          Log Out
          <LogOut />
        </Button>
      </main>
    </>
  );
}