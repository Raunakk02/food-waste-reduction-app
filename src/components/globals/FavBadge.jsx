import { Avatar, Box } from '@chakra-ui/react';
import Favorite from 'assets/sendScreen/favorite.svg';

const FavBadge = ({ children }) => {
  return (
    <Box pos="relative">
      {children}
      <Avatar
        pos="absolute"
        left={0}
        width="30%"
        height="30%"
        bg="none"
        src={Favorite}
      />
    </Box>
  );
};

export default FavBadge;
