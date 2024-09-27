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
import { useState } from "react";

import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
const FormSchema = z.object({
  priceRange: z.enum(["all", "cheap", "affordable", "expensive"], {
    required_error: "Bạn cần lựa chọn mức giá",
  }),
});
type TFormData = z.infer<typeof FormSchema>;
export default function FilterProductPage() {
  const router = useRouter();
  const [openFilter, setOpenFilter] = useState(false);
  const params = useParams();
  const { type } = (params as { type: string }) || {};
  const searchParams = useSearchParams();
  const priceRange = searchParams.get("priceRange")
    ? searchParams.get("priceRange")
    : "all";
  const form = useForm<TFormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      priceRange: priceRange as TFormData["priceRange"],
    },
  });
  const onSubmit = (data: TFormData) => {
    router.replace(`${type}?priceRange=${data.priceRange}`);
  };
  return (
    <DropdownMenu open={openFilter} modal>
      <DropdownMenuTrigger onClick={() => setOpenFilter(!openFilter)}>
        <Button>Bộ lọc</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <div className="p-2">
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                          <FormLabel className="font-normal">Giá rẻ</FormLabel>
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
                <Button
                  type="submit"
                  onClick={() => setOpenFilter(!openFilter)}
                >
                  Lọc
                </Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
