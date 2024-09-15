import {z} from "zod";

export const productSchema = z.object({
    name: z.string(),
    description: z.string(),
    status: z.enum(["draft","published","archived"]),
    price: z.number().min(1),
    isFeatured: z.boolean().optional(),
    images: z.array(z.string()).min(1, "At least 1 image is required"),
    category: z.enum(["kids","woman","man"])
})