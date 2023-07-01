import { useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import BackButton from '../BackButton';
import Card from '../Card';
import { useCardPairContext } from './CardPairProvider';

const CardPairChild = ({ children, index, ...rest }) => {
  const [openIndexes, toggleIndex] = useCardPairContext();
  const display = useBreakpointValue({ base: 'none', lg: 'flex' });

  return (
    <Card
      display={
        index === 0
          ? openIndexes.includes(1)
            ? display
            : 'flex'
          : openIndexes.includes(1)
          ? 'flex'
          : 'none'
      }
      borderRightRadius={openIndexes.includes(1) && index === 0 ? '0' : '10px'}
      borderLeftRadius={openIndexes.includes(0) && index === 1 ? '0' : '10px'}
      p={6}
      {...rest}
    >
      {index === 1 && (
        <BackButton
          bg="none"
          boxSize={6}
          top={0.5}
          left={0}
          onClick={() => toggleIndex(1)}
        />
      )}
      {children(toggleIndex)}
    </Card>
  );
};

export default CardPairChild;
