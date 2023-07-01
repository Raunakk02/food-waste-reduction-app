import { Image } from '@chakra-ui/react';
import InputField from 'components/formComponents/InputField';
import React from 'react';
import { useTranslation } from 'react-i18next';
import searchIcon from 'assets/globals/searchIcon.svg';

const SearchBar = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      <InputField
        {...props}
        leftIcon={<Image src={searchIcon} />}
        placeholder={t('SelectCountry.Search')}
      />
    </div>
  );
};

export default SearchBar;
