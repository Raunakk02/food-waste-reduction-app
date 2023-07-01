/* eslint react/no-children-prop: 0 */
import {
  Input,
  FormErrorMessage,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormHelperText
} from '@chakra-ui/react';

const InputField = ({
  name,
  label,
  required,
  register,
  error,
  leftIcon,
  rightIcon,
  helpertext,
  ...rest
}) => {
  const inputStyle = {
    borderRadius: '8px',
    backgroundColor: '#E2E8F833',
    border: '1px',
    borderColor: '#E2E8F8',
    _placeholder: {
      color: '#707070',
      opacity: 0.5,
      fontSize: ['0.6rem', '0.75rem', '0.75rem', '0.75rem', '0.75rem']
    }
  };
  return (
    <>
      <FormControl isRequired={required} isInvalid={error}>
        <FormLabel mb={1} fontWeight="none" fontSize={'xs'} htmlFor={name}>
          {label}
        </FormLabel>
        <InputGroup>
          {leftIcon && (
            <InputLeftElement pointerEvents="none" children={leftIcon} />
          )}
          <Input variant="filled" {...inputStyle} {...rest} {...register} />
          {rightIcon && <InputRightElement children={rightIcon} />}
        </InputGroup>
        {!error ? (
          <FormHelperText mt={0} fontSize="xs">
            {helpertext}
          </FormHelperText>
        ) : (
          <FormErrorMessage mt={0} fontSize="xs">
            {error?.message}
          </FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

export default InputField;
