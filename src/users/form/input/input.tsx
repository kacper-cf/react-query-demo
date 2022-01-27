import { Box, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { ChangeEventHandler, FC } from "react";

interface FormInputProps {
  label: string;
  helperText: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export const FormInput: FC<FormInputProps> = ({
  label,
  helperText,
  onChange,
  value,
}) => (
  <Box mt="8" mb="8">
    <FormLabel htmlFor="name">{label}</FormLabel>
    <Input
      id={label.toLocaleLowerCase()}
      type="text"
      value={value}
      onChange={onChange}
    />
    <FormHelperText>{helperText}</FormHelperText>
  </Box>
);
