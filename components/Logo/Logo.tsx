import { MarginProps } from 'styled-system';

import { Box } from 'components/Box';

import LogoIcon from 'assets/icons/logo.svg';

interface LogoProps extends MarginProps {}

const Logo = ({ ...props }: LogoProps) => {
  return (
    <Box display="flex" alignItems="flex-end" {...props} >
      <LogoIcon />

      <Box
        as="span"
        color="neutral.ultraDark"
        fontFamily="brand"
        fontSize={32}
        lineHeight={0.75}
        marginLeft={2}
      >
        ebuild
      </Box>
    </Box>
  );
}

export default Logo;
