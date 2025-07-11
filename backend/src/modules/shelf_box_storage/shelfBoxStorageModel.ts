import { z } from "zod";

export const shelfBoxStorageSchema = z.object({
    storage_id: z.string().uuid().optional(),
    master_shelf_id: z.string().uuid(),
    cal_box_id: z.string().uuid(),
    stored_date: z.date().optional(),
    stored_by: z.string().nullable().optional(),
    status: z.string().default("stored"),
    position: z.number().int().nullable().optional(),
    document_product_no: z.string().nullable().optional(),
    cubic_centimeter_box: z.number().nullable().optional(),
    count: z.number().int().nullable().optional(),
    total_volume: z.number(),
    document_warehouse_no: z.string().nullable().optional(),
});



export type TypeShelfBoxStorage = z.infer<typeof shelfBoxStorageSchema>;