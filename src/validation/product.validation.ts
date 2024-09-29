import z from "zod";

export const addProductSchema = z.object({
  name: z.string().min(5).max(100),
  description: z.string().min(10).max(1000),
  price: z.string().refine(
    (val) => {
      if (parseFloat(val) < 0) return false;
      return true;
    },
    { message: "Must be greater than 0." }
  ),
  stock: z.string().refine(
    (val) => {
      if (parseFloat(val) < 0) return false;
      return true;
    },
    { message: "Must be greater than 0." }
  ),
  category: z.string().min(3).max(20),
});
