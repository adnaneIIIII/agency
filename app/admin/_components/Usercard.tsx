// "use client";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
// import { DollarSign, PartyPopper, ShoppingBag, Users } from "lucide-react";
// import { OrderAction, ProductAction } from "../actions/Productaction";
// import formatCurrency from "@/app/(home)/_components/formatCurrency";
// import Orderbyday from "./Orderbyday";
// import {
//   useEffect,
//   useState,
// } from "react";

// export default function Usercard() {
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalUsers, setTotalUsers] = useState(0);
//   const [totalProduct, setTotalProduct] = useState(0);
//   interface Order {
//     id: string;
//     pprice: number;
//     purchasedAt: Date;
//     firstname: string;
//     lastname: string;
//     email: string;
//   }
//   const [Orders, setOrders] = useState<Order[]>([]);

//   useEffect(() => {
//     async function fetchOrder() {
//       const orders = await OrderAction();
//       const totalPrice = orders.reduce((sum, order) => sum + order.pprice, 0);
//       const uniqueUsers = new Set(orders.map((order) => order.id));
//       const totalUsers = uniqueUsers.size;
//       setTotalPrice(totalPrice);
//       setTotalUsers(totalUsers);
//       setOrders(orders);
//       setTotalProduct(totalUsers);
//     }
//     fetchOrder();
//     async function fetchProduct() {
//       const product = await ProductAction();
//       const UniqueProduct = new Set(product.map((Pro) => Pro.id));
//       const totalProduct = UniqueProduct.size;

//       return { totalProduct };
//     }
//     fetchProduct();
//   }, []);

//   interface ChartData {
//     name: string;
//     pv: number;
//   }

//   const chartData = Orders.reduce((acc: ChartData[], order: Order) => {
//     const date = new Date(order.purchasedAt).toLocaleDateString(); // Group by date
//     const existing = acc.find((item) => item.name === date);

//     if (existing) {
//       existing.pv += order.pprice; // Sum price per day
//     } else {
//       acc.push({ name: date, pv: order.pprice });
//     }

//     return acc;
//   }, []);

//   return (
//     <>
//       <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle>Total Revenue</CardTitle>
//             <DollarSign className="w-4 h-4 text-green-500" />
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{formatCurrency(totalPrice)}</p>
//             <p className="text-xs text-muted-foreground">Based on 12 Jun</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle>Total Sales</CardTitle>
//             <ShoppingBag className="w-4 h-4 text-blue-500" />
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">+{totalUsers}</p>
//             <p className="text-xs text-muted-foreground">
//               Total Sales on ShoeMar
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle>Total Products</CardTitle>
//             <PartyPopper className="w-4 h-4 text-indigo-500" />
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{totalProduct}</p>
//             <p className="text-xs text-muted-foreground">
//               Total Products Created
//             </p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader className="flex flex-row items-center justify-between pb-2">
//             <CardTitle>Total Users</CardTitle>
//             <Users className="w-4 h-4 text-orange-500" />
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{totalUsers}</p>
//             <p className="text-xs text-muted-foreground">
//               Total Users on Signed Up
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//       <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10">
//         <Card className="xl:col-span-2">
//           <CardHeader>
//             <CardTitle>Transactions </CardTitle>
//             <CardDescription>View all transactions</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Orderbyday data={chartData} />
//           </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Recent Sale</CardTitle>
//           </CardHeader>
//           {Orders.slice(-6).map((item: Order) => (
//               <CardContent key={item.id} className="flex flex-col gap-8">
//                 <div className="flex items-center gap-4">
//                   <Avatar className="bg-gray-200 rounded-[25px] p-2 hidden sm:flex items-center justify-center h-9 w-9">
//                     <AvatarFallback>AE</AvatarFallback>
//                   </Avatar>
//                   <div className="grid gap-1">
//                     <p className="text-sm font-medium">
//                       {item.firstname + item.lastname}
//                     </p>
//                     <p className="text-sm text-muted-foreground">
//                       {item.email}
//                     </p>
//                   </div>
//                   <p className="ml-auto font-medium">{item.pprice}</p>
//                 </div>
//               </CardContent>
//             )
//           )}
//         </Card>
//       </div>
//     </>
//   );
// }
