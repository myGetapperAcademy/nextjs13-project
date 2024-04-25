import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectors } from "@/spas/admin-panel/redux-store";
import { useMemo } from "react";

export const useProductDetailsScene = () => {
  const { productId } = useParams();

  const productsList = useSelector(selectors.getProductsList);

  const product = useMemo(
    () => productsList.find((p) => p.id === productId),
    [productId, productsList],
  );

  return { product };
};
