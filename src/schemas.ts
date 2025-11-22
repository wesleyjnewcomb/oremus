import z from "zod";

export const PrayerSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  text: z.array(z.string()),
  repititions: z.number().optional(),
});

export type Prayer = z.infer<typeof PrayerSchema>;

export const PrayerSectionSchema = z.object({
  title: z.string(),
  prayers: z.array(z.union([z.string(), z.tuple([z.string(), z.number()])])),
});

export type PrayerSection = z.infer<typeof PrayerSectionSchema>;

export const PrayerSetSchema = z.object({
  title: z.string(),
  description: z.string(),
  sections: z.array(PrayerSectionSchema),
});

export type PrayerSet = z.infer<typeof PrayerSetSchema>;

export const ProgressSchema = z.tuple([z.number(), z.number(), z.number()]);

export type Progress = z.infer<typeof ProgressSchema>;