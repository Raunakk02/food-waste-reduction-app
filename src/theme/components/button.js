const Button = {
  baseStyle: {},
  variants: {
    primary: {
      fontSize: '0.75rem',
      color: 'white',
      backgroundColor: 'brand.blue',
      boxShadow: '0px 3px 6px #00000029',
      borderRadius: '8px',
      w: 'full',
      _hover: {
        _loading: {
          bg: 'brand.gray'
        },
        _disabled: {
          bg: 'brand.gray'
        }
      }
    },
    secondary: {
      fontSize: '0.75rem',
      color: 'brand.blue',
      backgroundColor: '#4586FA1A',
      boxShadow: '0px 3px 6px #00000029',
      borderRadius: '8px',
      border: '1px',
      w: 'full',
      _hover: {
        backgroundColor: 'white'
      }
    }
  },
  defaultProps: {
    variant: 'primary'
  }
};

export default Button;
