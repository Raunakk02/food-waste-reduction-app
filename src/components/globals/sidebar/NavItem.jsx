import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Text, Link, Menu, MenuButton } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export default function NavItem({ source, text, to }) {
  const { t } = useTranslation();
  //jsx
  return (
    <Flex
      mt={0}
      flexDir="column"
      w="100%"
      alignItems={['center', 'flex-start']}
    >
      <Menu placement="right" px="0">
        <Link
          as={NavLink}
          to={to}
          style={({ isActive }) => {
            return {
              backgroundColor: isActive && '#E2E8F8',
              borderLeftStyle: isActive && 'solid',
              borderRightStyle: isActive && 'none',
              borderTopStyle: isActive && 'none',
              borderBottomStyle: isActive && 'none',
              borderWidth: isActive && '0.3rem',
              borderColor: isActive && '#4586FA'
            };
          }}
          p={1}
          my={0.4}
          // borderRadius={8}
          _hover={{
            textDecor: 'none',
            backgroundColor: '#E2E8F8',
            borderLeftStyle: 'solid',
            borderRightStyle: 'none',
            borderTopStyle: 'none',
            borderBottomStyle: 'none',
            borderWidth: '0.3rem',
            borderColor: '#4586FA'
          }}
          w={'100%'}
        >
          <MenuButton w="100%" display={'flex'} justifyContent="center" my="1">
            <Flex justify={'flex-start'}>
              {/* <Image src={source}/> */}
              {source}
              <Text
                ml={5}
                fontSize="sm"
                display={'flex'}
                justifyContent="center"
                flexDir={'column'}
              >
                {t(text)}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
