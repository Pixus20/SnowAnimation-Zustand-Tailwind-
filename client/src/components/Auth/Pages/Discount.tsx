// import { useState } from "react";

// interface Coupon {
//   code: string;
//   discount: number;
//   used: number; // Кількість використань купона
// }

// const availableCoupons: Coupon[] = [
//   { code: "SALE10", discount: 10, used: 0 },
//   { code: "SALE20", discount: 20, used: 0 },
//   { code: "SALE30", discount: 30, used: 0 },
// ];

// const Discount = () => {
//   const [couponCode, setCouponCode] = useState("");
//   const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
//   const [error, setError] = useState("");
//   const [usedCoupons, setUsedCoupons] = useState(0);
//   const [bonusReceived, setBonusReceived] = useState(false);

//   const handleApplyCoupon = () => {
//     const foundCoupon = availableCoupons.find((c) => c.code === couponCode);

//     if (!foundCoupon) {
//       setError("❌ Неправильний код купона!");
//       setAppliedCoupon(null);
//     } else {
//       setAppliedCoupon(foundCoupon);
//       setError("");

//       // Оновлення лічильника використаних купонів
//       setUsedCoupons((prev) => prev + 1);
      
//       // Нарахування бонусного купона після 10 використаних купонів
//       if (usedCoupons + 1 === 10) {
//         setBonusReceived(true);
//       }
//     }
//     setCouponCode(""); // Очищаємо поле вводу
//   };

//   return (
//     <div className="p-6 bg-purple-200 rounded-lg shadow-md max-w-lg mx-auto">
//       <h1 className="text-2xl font-bold text-green-500 mb-4">🎟️ Введіть код купона</h1>

//       <input
//         type="text"
//         value={couponCode}
//         onChange={(e) => setCouponCode(e.target.value)}
//         className="p-2 w-full border rounded-lg mb-4"
//         placeholder="Введіть код..."
//       />

//       <button
//         onClick={handleApplyCoupon}
//         className="bg-red-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600"
//       >
//         Застосувати
//       </button>

//       {error && <p className="text-red-500 mt-4">{error}</p>}

//       {appliedCoupon && (
//         <div className="mt-4 p-4 bg-green-500 text-white rounded-lg">
//           ✅ Купон <strong>{appliedCoupon.code}</strong> активовано! Знижка: {appliedCoupon.discount}%
//         </div>
//       )}

//       {/* Прогрес використаних купонів */}
//       <div className="mt-6">
//         <h2 className="text-lg font-semibold text-white">Прогрес використання купонів</h2>
//         <div className="w-full bg-gray-300 rounded-lg h-4 mt-2">
//           <div
//             className="bg-green-500 h-4 rounded-lg"
//             style={{ width: `${(usedCoupons / 10) * 100}%` }}
//           ></div>
//         </div>
//         <p className="text-white mt-2">{usedCoupons} / 10 використаних купонів</p>
//       </div>

//       {/* Повідомлення про бонусний купон */}
//       {bonusReceived && (
//         <div className="mt-4 p-4 bg-red-500 text-white rounded-lg">
//           🎉 Ви отримали бонусний купон <strong>SALE30</strong> (30% знижки)!
//         </div>
//       )}
//     </div>
//   );
// };

// export default Discount;


import useDiscountStore from "@/storage/discount.store";
import { useState } from "react";

interface Coupon {
  code: string;
  discount: number;
  used: number;
}

const availableCoupons: Coupon[] = [
  { code: "SALE10", discount: 10, used: 0 },
  { code: "SALE20", discount: 20, used: 0 },
  { code: "SALE30", discount: 30, used: 0 },
];

const Discount = () => {
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  const [error, setError] = useState("");
  
  const { usedCoupons, bonusReceived, incrementUsedCoupons } = useDiscountStore();

  const handleApplyCoupon = () => {
    const foundCoupon = availableCoupons.find((c) => c.code === couponCode);

    if (!foundCoupon) {
      setError("❌ Неправильний код купона!");
      setAppliedCoupon(null);
    } else {
      setAppliedCoupon(foundCoupon);
      setError("");

      // Оновлення лічильника використаних купонів
      incrementUsedCoupons();
    }
    setCouponCode(""); // Очищаємо поле вводу
  };

  return (
    <div className="p-6 bg-purple-200 rounded-lg shadow-md max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-green-500 mb-4">🎟️ Введіть код купона</h1>

      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        className="p-2 w-full border rounded-lg mb-4"
        placeholder="Введіть код..."
      />

      <button
        onClick={handleApplyCoupon}
        className="bg-red-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-600"
      >
        Застосувати
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {appliedCoupon && (
        <div className="mt-4 p-4 bg-green-500 text-white rounded-lg">
          ✅ Купон <strong>{appliedCoupon.code}</strong> активовано! Знижка: {appliedCoupon.discount}%
        </div>
      )}

      {/* Прогрес використаних купонів */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-white">Прогрес використання купонів</h2>
        <div className="w-full bg-gray-300 rounded-lg h-4 mt-2">
          <div
            className="bg-green-500 h-4 rounded-lg"
            style={{ width: `${(usedCoupons / 10) * 100}%` }}
          ></div>
        </div>
        <p className="text-white mt-2">{usedCoupons} / 10 використаних купонів</p>
      </div>

      {/* Повідомлення про бонусний купон */}
      {bonusReceived && (
        <div className="mt-4 p-4 bg-red-500 text-white rounded-lg">
          🎉 Ви отримали бонусний купон <strong>SALE30</strong> (30% знижки)!
        </div>
      )}
    </div>
  );
};

export default Discount;
