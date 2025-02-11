import { z } from "zod";

export const CalculateScheme = z.object({
  product: z.string().nonempty("Товар обязателен для заполнения"),
  weight: z.string().min(1, "Вес обязателен для заполнения"),
  city: z.string().nonempty("Город обязателен для заполнения"),
  mobile_phone: z
    .string()
    .min(11, "Минимальное количество символов")
    .nonempty("Мобильный телефон обязателен для заполнения"),
  email: z
    .union([
      z.string().email("Проверьте правильность ввода электронной почты"), // Валидация для непустых строк
      z.literal(""), // Разрешаем пустую строку
      z.null(), // Разрешаем null
    ])
    .optional()
    .transform((value) => (value === "" ? undefined : value)),
});

export type CalculateType = z.infer<typeof CalculateScheme>;
