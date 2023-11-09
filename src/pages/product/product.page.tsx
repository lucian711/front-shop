import { Grid, Text, Image, Select, Flex } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

import { getData, productsType } from "@/store";

export function ProductList() {
  const [value, setValue] = useState<string | null>("");
  const [products, setProducts] = useState<productsType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<productsType[]>([]);
  const { data, isSuccess } = useQuery<productsType[]>({
    queryKey: ["products"],
    queryFn: () => {
      return getData<productsType[]>({
        url: "https://fakestoreapi.com/products"
      });
    }
  });

  const handleCategoryChange = (value: string) => {
    const newFilteredProducts = products?.filter(
      item => item.category === value
    );
    setValue(value);
    setFilteredProducts(newFilteredProducts);
  };

  useEffect(() => {
    if (isSuccess && data) {
      setProducts(data);
      setFilteredProducts(data);
    }
    //두번째 인자로 들어오는 값은 변경되었을때 재실행이된다.
  }, [isSuccess, data]);

  return (
    <>
      <Flex justify="end">
        <Select
          checkIconPosition="right"
          data={[
            { value: "electronics", label: "일렉트로닉" },
            { value: "jewelery", label: "쥬얼리" },
            { value: "men's clothing", label: "남자 상의" },
            { value: "women's clothing", label: "여자 상의" }
          ]}
          value={value}
          onChange={value => handleCategoryChange(value || "")}
          placeholder="카테고리 선택"
        />
      </Flex>
      <Grid grow gutter="xl" mt={40}>
        {filteredProducts.map((item: productsType) => (
          <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={item.id}>
            <Image src={item.image} h={480} />
            <Text lineClamp={1} fw={700}>
              {item.title}
            </Text>
            <Text size="xs" lineClamp={4}>
              {item.description}
            </Text>
            <Text size="xl" lineClamp={4}>
              {item.price}
              <em>$</em>
            </Text>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}
