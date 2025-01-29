import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const menuItems = [
  { name: "Особисті дані", path: "/User/data" },
  { name: "Знижки", path: "/User/discount" },
  { name: "Збережені адреси", path: "/User/addresses" },
  { name: "Історія замовлень", path: "/User/orders" },
  { name: "Список бажань", path: "/User/wishlist" },
];

const UserLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  return (
    <div className="flex">
      {/* Left Menu */}
      <aside className="w-1/4 bg-purple-200 p-6 min-h-screen">
        <h2 className="text-xl font-bold text-white mb-4">Особистий кабінет</h2>
        <ul className="space-y-3">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link href={item.path}>
                <span
                  className={`cursor-pointer text-lg text-white hover:underline ${
                    router.pathname === item.path ? "font-bold" : ""
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Content */}
      <main className="w-3/4 p-6">{children}</main>
    </div>
  );
};

export default UserLayout;
