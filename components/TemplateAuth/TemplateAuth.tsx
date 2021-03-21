import { PropsWithChildren } from 'react';
import Image from 'next/image';

import Template from "components/Template/Template";
import { Box } from "components/Box";

import Logo from 'components/Logo';

const BACKGROUND_IMAGE = '/images/background.jpg';
const ACQUA_IMAGE = '/images/acqua-mark.png';

interface TemplateAuthProps {
  title: string;
  subtitle: string;
}

const TemplateAuth = ({ title, subtitle, children }: PropsWithChildren<TemplateAuthProps>) => {
  return (
    <Template>
      <Box
        as="main"
        height="100vh"
        display="grid"
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="1fr"
        gridTemplateAreas="'bg form'"
        alignItems="center"
      >
        <Box gridArea="bg" height="100%" position="relative">
          <Image
            layout="fill"
            objectFit="cover"
            quality={100}
            src={BACKGROUND_IMAGE}
          />
        </Box>
        <Box
          gridArea="form"
          paddingLeft={10}
          height="100%"
          position="relative"
          overflow="hidden"
          display="flex"
          alignItems="center"
        >
          <Box display="block" maxWidth={320}>
            <Logo mb={6} />

            <Box
              as="p"
              fontFamily="default"
              fontSize={20}
              fontWeight="bold"
              color="brand.primary"
              lineHeight={1.2}
              mb={3}
            >
              {title}
            </Box>

            <Box
              as="p"
              fontFamily="default"
              fontSize={16}
              color="neutral.medium"
              lineHeight={1.5}
              mb={6}
            >
              {subtitle}
            </Box>

            {children}

            <Box position="absolute" left="0" bottom="0" zIndex={-1}>
              <Image
                layout="fixed"
                width="702"
                height="367"
                quality={100}
                src={ACQUA_IMAGE}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Template>
  )
}

export default TemplateAuth;
