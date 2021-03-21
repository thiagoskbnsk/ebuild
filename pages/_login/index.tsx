import TemplateAuth from 'components/TemplateAuth/TemplateAuth';
import FormInput from 'components/FormInput';
import { Box } from 'components/Box';

import data from './data';

const Login = () => {
  return (
    <TemplateAuth
      title={data.title}
      subtitle={data.subtitle}
    >
      <Box>
        TODO: responsive, hover and refactor components, remove ts warnings
        <FormInput label="Seu e-mail:" placeholder="email@example.com.br" mb="24px" />
        <FormInput label="Sua senha:" placeholder="******" mb="24px" />
        <Box textAlign="right" mb={4}>
          <Box
            as="a"
            href="#"
            fontFamily="default"
            fontSize="14px"
            lineHeight="24px"
            textDecoration="none"
            color="brand.primary"
          >
            {data.forgetPassword}
          </Box>
        </Box>
        <Box
          as="button"
          type="button"
          backgroundColor="brand.primary"
          color="neutral.ultraLight"
          width="255px"
          height="48px"
          borderRadius="4px"
          border="none"
          outline="none"
          cursor="pointer"
          fontFamily="default"
          fontSize="14px"
          lineHeight="24px"
          fontWeight="500"
        >
         {data.btnLogin}
        </Box>
        <Box display="flex" alignItems="center">
          <Box
            as="p"
            fontFamily="default"
            fontSize="14px"
            lineHeight="24px"
            color="neutral.medium"
            mr={1}
          >
            {data.dontHaveAccess}
          </Box>
          <Box
            as="a"
            href="#"
            fontFamily="default"
            fontSize="14px"
            lineHeight="24px"
            textDecoration="none"
            color="brand.primary"
          >
            {data.register}
          </Box>
        </Box>
       </Box>
    </TemplateAuth>
  )
}

export default Login;
