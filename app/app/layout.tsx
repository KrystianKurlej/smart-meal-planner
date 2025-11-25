import NavBottom from "@/components/nav-bottom";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen relative bg-stone-50 pb-32">
      <NavBottom />
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}
