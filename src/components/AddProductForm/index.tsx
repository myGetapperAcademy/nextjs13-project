import React, { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useAddProductForm } from "./index.hooks";
import { Button, Stack } from "@mui/material";
import { FormTextField } from "@/components/_form/FormTextField";

type AddProductFormProps = {};

export const AddProductForm = memo(({}: AddProductFormProps) => {
  const { formData, triggerSubmit, submitDisabled } = useAddProductForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={triggerSubmit}>
        <Stack spacing={2}>
          <FormTextField name="id" label="Id" />
          <FormTextField name="name" label="Name" />
          <FormTextField name="description" label="Description" />
          <FormTextField name="price" label="Price" type="number" />
          <Button variant="contained" type="submit" disabled={submitDisabled}>
            Salva
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
});
AddProductForm.displayName = "AddProductForm";
