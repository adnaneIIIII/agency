

import { Separator } from "@/components/ui/separator";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DesktopSidebar from "./_components/Sidebar";
import Breadcrumbheader from "./_components/Breadcrumbheader";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();

  // If the user is not signed in, send them to Clerk's sign-in page
  if (!user) {
    redirect("/sign-in");
  }

  // Check if the email is "adnane@gmail.com"
  if (user.emailAddresses[0].emailAddress !== "adnane.elotmani@usmba.ac.ma") {
    redirect("/");
  }

  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          {/* <MobileSidebar /> */}
          <Breadcrumbheader />
          <div className="gap-1 flex items-center">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground pl-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
