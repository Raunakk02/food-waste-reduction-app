import {
  FormErrorMessage,
  FormControl,
  Radio,
  RadioGroup,
  Stack,
  FormLabel
} from '@chakra-ui/react';

const RadioField = ({
  name,
  options,
  label,
  register,
  required,
  disabled,
  error
}) => {
  return (
    <FormControl isRequired={required} isInvalid={error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <RadioGroup>
        <Stack direction="row">
          {options.map((opt, i) => (
            <Radio
              {...register}
              isDisabled={disabled}
              key={i}
              value={opt.value}
            >
              {opt.key}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <FormErrorMessage mt={0} fontSize="xs">
        {error?.message}
      </FormErrorMessage>
    </FormControl>
  );
};
export default RadioField;
