"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
const FormSchema = z.object({
  priceRange: z.enum(["all", "cheap", "affordable", "expensive"], {
    required_error: "Bạn cần lựa chọn mức giá",
  }),
});
type TFormData = z.infer<typeof FormSchema>;
export default function ProductTypeListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { type } = params as { type: string };
  const priceRange = searchParams ? searchParams.get("priceRange") : "all";
  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      priceRange: priceRange as TFormData["priceRange"],
    }
  });
  const onSubmit = (data: TFormData) => {
    router.replace(`${type}?priceRange=${data.priceRange}`);
  };
  return (
    <div>
      <div className="w-full h-72 mt-5 relative bg-[url('/banner-product-list.jpg')] bg-center bg-no-repeat bg-cover bg-fixed flex justify-center items-center">
        <div className="absolute w-full h-full bg-black opacity-50"></div>
        <p className="text-5xl bold font-[playFair] z-10 text-ivorywhite">
          {type.toUpperCase()}
        </p>
      </div>
      <div className="w-full h-full flex justify-center items-center my-5">
        <div className="w-1/2 bg-red-500 h-full">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>Bộ lọc</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div className="p-2">
                <FormProvider {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="priceRange"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Chọn khoảng giá mong muốn:</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-col space-y-1"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="all" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Mọi tầm giá
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="cheap" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Giá rẻ
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="affordable" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Giá trung bình
                                </FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="expensive" />
                                </FormControl>
                                <FormLabel className="font-normal">
                                  Hàng xa xỉ
                                </FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div className="flex justify-end">
                      <Button type="submit">Lọc</Button>
                    </div>
                  </form>
                </FormProvider>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
