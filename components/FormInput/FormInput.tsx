import { Box } from "components/Box";
import { Input } from "components/Input";

interface FormInputProps {
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
}

const FormInput = ({ label, error, placeholder, type, ...rest }: FormInputProps) => {
  return (
    <Box {...rest}>
      <Box
        as="p"
        mb={2}
        fontFamily="default"
        fontSize="14px"
        lineHeight="14px"
        color={!!error ? "alert.danger" : "neutral.medium"}
      >
        {label}
      </Box>

      <Input
        as="input"
        lineHeight="24px"
        fontSize="14px"
        width="100%"
        height="48px"
        padding="0 12px"
        borderRadius="4px"
        border="1px solid"
        borderColor={!!error ? "alert.danger" : "neutral.light"}
        color="neutral.light"
        placeholder={placeholder}
        type={type || "text"}
      />

      {!!error && (
        <Box
          as="p"
          color="alert.danger"
          fontFamily="default"
          fontSize="10px"
          lineHeight="12px"
          mt={1}
        >
          {error}
        </Box>
      )}
    </Box>
  );
}

export default FormInput;
