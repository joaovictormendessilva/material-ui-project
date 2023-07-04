import { Box, Button, TextField } from "@mui/material";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { ChangeEvent, useState, useEffect } from "react";

interface IInputDataModeOneProps {
  cpf_cnpj: string
  password: string
}

export function LoginModeOne() {

  const [inputDataModeOne, setInputDataModeOne] = useState<IInputDataModeOneProps>({} as IInputDataModeOneProps);
  const [isEmptyCheck, setIsEmptyCheck] = useState({
    cpf_cnpj: false,
    password: false
  })

  const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputDataModeOne((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleCheckLogin = () => {

    if (!inputDataModeOne.cpf_cnpj) {
      setIsEmptyCheck((prev) => ({ ...prev, cpf_cnpj: true }))
    }
    if (!inputDataModeOne.password) {
      setIsEmptyCheck((prev) => ({ ...prev, password: true }))
    }

    if (inputDataModeOne.cpf_cnpj && inputDataModeOne.password) {
      console.log("Sucesso Mode 1", inputDataModeOne)
    }
    else {
      console.log("Erro Mode 1", inputDataModeOne)
    }
  }

  useEffect(() => {
    setIsEmptyCheck((prev) => ({ ...prev, cpf_cnpj: false }))
  }, [inputDataModeOne.cpf_cnpj])

  useEffect(() => {
    setIsEmptyCheck((prev) => ({ ...prev, password: false }))
  }, [inputDataModeOne.password])

  return (
    <>
      <TextField
        name="cpf_cnpj"
        type="text"
        placeholder="CPF/CNPJ"
        size="small"
        fullWidth
        onChange={handleChangeInputs}
        error={isEmptyCheck.cpf_cnpj}
        helperText={isEmptyCheck.cpf_cnpj && "Campo obrigatório."}
      />

      <TextField
        name="password"
        type="password"
        placeholder="Senha"
        size="small"
        fullWidth
        onChange={handleChangeInputs}
        error={isEmptyCheck.password}
        helperText={isEmptyCheck.password && "Campo obrigatório."}
      />

      <Box marginTop={2} textAlign="right">
        <Button
          variant="contained"
          endIcon={<ChevronRightOutlinedIcon />}
          onClick={handleCheckLogin}>
          Acessar
        </Button>
      </Box>
    </>
  )
}