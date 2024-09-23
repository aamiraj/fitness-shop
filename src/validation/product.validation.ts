import z from "zod";

export const addProductSchema = z
  .object({
    images: z.string().array(),
    name: z.string().min(5).max(50),
    description: z.string().min(10).max(200),
    price: z.string(),
    stock: z.string(),
    category: z.string().min(3).max(20),
  })
  .refine(
    ({ price, stock }) => {
      if (parseFloat(price) < 0 || parseFloat(stock)) return false;
    },
    { message: "Must be greater than 0." }
  );
