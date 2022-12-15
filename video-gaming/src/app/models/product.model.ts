

// module.exports = (mongoose: { model: (arg0: string, arg1: any) => any; Schema: (arg0: { id: StringConstructor; title: StringConstructor; price: NumberConstructor; category: StringConstructor; description: StringConstructor; image: StringConstructor; }, arg1: { timestamps: boolean; }) => any; }) => {
//   const Product = mongoose.model(
//     "product",
//     mongoose.Schema(
//       {
//         id: String,
//         title: String,
//         price: Number,
//         category: String,
//         description: String,
//         image: String
//       },
//       { timestamps: true }
//     )
//   );

//   return Product;
// };


export interface Product {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  image: string
}
