import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Stack
} from '@chakra-ui/react'
import { Form as FormFormik, Formik, useFormik } from 'formik'
import InputForm from './InputForm'

export default function Form() {
  const formik = useFormik({
    initialValues: {
      email: ''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <Stack
      w="40%"
      h="100%"
      alignItems="center"
      justifyContent="center"
      gap="5vw"
      backgroundColor="#ffffff"
    >
      <Stack alignItems="center">
        <Heading
          fontSize="64px"
          fontWeight="900"
          textShadow="1px 2px 4px rgba(0,0,0,0.5)"
        >
          Login
        </Heading>
        <Heading
          fontSize="64px"
          fontWeight="900"
          textShadow="1px 2px 4px rgba(0,0,0,0.5)"
        >
          Your Acount
        </Heading>
      </Stack>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validate={values => {
          const errors = values
          if (!values.email) {
            errors.email = 'Required'
          }
          if (!values.password) {
            errors.password = 'Required'
          }
          return errors
        }}
        onSubmit={() => formik.handleSubmit()}
      >
        {({ values, errors, touched }) => (
          <FormFormik onSubmit={formik.handleSubmit}>
            <Stack alignItems="center" gap="1vw">
              <FormControl>
                <FormLabel fontSize="24px">Email: </FormLabel>
                {errors.email && touched.email && errors.email}
                <InputForm
                  name="email"
                  placeholder="jhondoe@gmail.com"
                  type="email"
                  onChange={formik.handleChange}
                  defaultValue={values.email}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontSize="24px">Password: </FormLabel>
                {errors.password && touched.password && errors.password}
                <InputForm
                  name="password"
                  placeholder="********"
                  type="password"
                  onChange={formik.handleChange}
                  defaultValue={values.password}
                />
                <FormHelperText textAlign="center" pt="10px">
                  We'll never share your email or password.
                </FormHelperText>
              </FormControl>
              <Button
                colorScheme="green"
                type="submit"
                w="10vw"
                h="5vh"
                backgroundColor="#81F526"
                borderRadius="100px"
                fontSize="18px"
                cursor="pointer"
                boxShadow="1px 5px 5px rgba(0,0,0,0.5)"
              >
                Login
              </Button>
            </Stack>
          </FormFormik>
        )}
      </Formik>
    </Stack>
  )
}
