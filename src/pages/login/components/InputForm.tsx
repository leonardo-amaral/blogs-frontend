import { Input } from '@chakra-ui/react'

type InputProps = {
  onChange: (values: any) => void
  defaultValue: string
  type: string
  name: string
  placeholder: string
}

function InputForm({
  onChange,
  defaultValue,
  type,
  name,
  placeholder
}: InputProps) {
  return (
    <Input
      variant="unstyled"
      name={name}
      type={type}
      placeholder={placeholder}
      backgroundColor="#d9d9d949"
      w="20vw"
      h="5vh"
      borderRadius="100px"
      paddingLeft="20px"
      boxShadow="1px 5px 5px rgba(0,0,0,0.5)"
      onChange={onChange}
      defaultValue={defaultValue}
    />
  )
}

export default InputForm
