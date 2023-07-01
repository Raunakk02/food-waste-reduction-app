import { useField } from 'formik';
import {
  Input,
  FormErrorMessage,
  FormControl,
  InputGroup,
  InputRightAddon,
  InputLeftAddon
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export function useFastField(props) {
  const [field, meta] = useField(props);
  const [value, setValue] = useState(field.value);
  const { onChange } = field;
  //why useDebounce?
  //because we want to wait for the user to stop typing before we update the value to improve performance
  const debounced = useDebouncedCallback((e) => {
    onChange(e);
  }, 100);

  field.value = value;
  field.onChange = (e) => {
    if (e && e.currentTarget) {
      setValue(e.currentTarget.value);
      debounced(e);
    }
  };
  return [field, meta];
}

const InputArray = ({
  rightAddOn,
  leftAddOn,
  leftAddOnClick,
  rightAddOnClick,
  error,
  register
}) => {
  return (
    <>
      <FormControl isInvalid={error}>
        <InputGroup>
          <InputLeftAddon cursor="pointer" onClick={leftAddOnClick}>
            {leftAddOn}
          </InputLeftAddon>
          <Input {...register} isInvalid={error} />
          <InputRightAddon cursor="pointer" onClick={rightAddOnClick}>
            {rightAddOn}
          </InputRightAddon>
        </InputGroup>
        <FormErrorMessage mt={0} fontSize="xs">
          {error?.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
};
export default InputArray;
