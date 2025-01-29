import UserLayout from "@/components/Auth/UserLayout";

export default function UserPageLayout({ children }: { children: React.ReactNode }) {
  return <UserLayout>{children}</UserLayout>;
}
