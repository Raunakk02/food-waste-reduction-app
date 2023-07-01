import { IconButton, Image } from '@chakra-ui/react';
import React from 'react';
import backIcon from 'assets/globals/backIcon.svg';

export const BackIcon = ({ ...rest }) => {
  return (
    <Image
      cursor={'pointer'}
      opacity="0.6"
      _hover={{
        opacity: '1',
        transition: '0.3s'
      }}
      _active={{
        backgroundColor: 'white'
      }}
      {...rest}
      src={backIcon}
    ></Image>
  );
};
const BackButton = ({ ...rest }) => {
  return (
    <IconButton
      pos="absolute"
      top={5}
      left={5}
      boxShadow="none"
      width="0.5rem"
      marginRight="2rem"
      opacity="0.6"
      backgroundColor="white"
      _hover={{
        opacity: '1',
        transition: '0.3s'
      }}
      _active={{
        backgroundColor: 'white'
      }}
      icon={<Image width="100%" height="100%" src={backIcon}></Image>}
      {...rest}
    />
  );
};

export default BackButton;
