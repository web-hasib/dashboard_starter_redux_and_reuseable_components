import { z } from "zod";

export const planSchema = z.object({
  name: z.string().min(1, "Please select a plan"),
  description: z.string().min(3, "Description is required"),
  features: z.string().min(3, "Facilities is required"),
  price: z.coerce.number().min(0, "Price must be positive"), // <-- coerce string to number
});

export type PlanFormType = z.infer<typeof planSchema>;
