import NavBottom from "@/components/nav-bottom";

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-zinc-50 pb-16">
      <NavBottom />
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}
