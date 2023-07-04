import { Typography, Box, TextField, Button } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

import { useState, useEffect, ChangeEvent } from 'react'

interface IValoresADevolverProps {
  backToLogin: () => void
}

interface IValoresADevolverFieldsProps {
  cpf_cnpj: string
  dtNasc_Fundacao: string
}

export function ValoresADevolver({ backToLogin }: IValoresADevolverProps) {

  const [valoresADevolverFields, setValoresADevolverFields] = useState<IValoresADevolverFieldsProps>({} as IValoresADevolverFieldsProps);
  const [isEmptyCheck, setIsEmptyCheck] = useState({
    cpf_cnpj: false,
    dtNasc_Fundacao: false
  })

  const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setValoresADevolverFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleCheckSend = () => {
    const isEmptyFields = {
      cpf_cnpj: !valoresADevolverFields.cpf_cnpj,
      dtNasc_Fundacao: !valoresADevolverFields.dtNasc_Fundacao
    }

    setIsEmptyCheck(isEmptyFields);

    if (Object.values(isEmptyFields).every(field => !field)) {
      console.log("Sucesso Valores a Devolver", valoresADevolverFields)
    }
    else {
      console.log("Erro Valores a Devolver", valoresADevolverFields)
    }
  }

  useEffect(() => {
    valoresADevolverFields.cpf_cnpj && setIsEmptyCheck((prev) => ({ ...prev, cpf_cnpj: false }))
    valoresADevolverFields.dtNasc_Fundacao && setIsEmptyCheck((prev) => ({ ...prev, dtNasc_Fundacao: false }))
  }, [valoresADevolverFields.cpf_cnpj, valoresADevolverFields.dtNasc_Fundacao])

  return (
    <>
      <Typography variant='h6' fontSize={14} component="label">
        Digite abaixo seus dados para visualizar os valores a devolver:
      </Typography>

      <Box display="flex" flexDirection="column" gap={1}>
        <TextField
          name='cpf_cnpj'
          size='small'
          fullWidth
          placeholder='CPF/CNPJ'
          onChange={handleChangeInputs}
          error={isEmptyCheck.cpf_cnpj}
          helperText={isEmptyCheck.cpf_cnpj && "Campo obrigatório."}
        />

        <TextField
          name='dtNasc_Fundacao'
          size='small'
          fullWidth
          placeholder='Data de Nasc./Fundação da Empresa'
          onChange={handleChangeInputs}
          error={isEmptyCheck.dtNasc_Fundacao}
          helperText={isEmptyCheck.dtNasc_Fundacao && "Campo obrigatório."}
        />
      </Box>

      <Box display="flex" justifyContent="space-between" marginTop={1} gap={1}>
        <Button
          fullWidth
          variant='outlined'
          onClick={backToLogin}
          startIcon={<KeyboardArrowLeftOutlinedIcon />}>
          VOLTAR
        </Button>

        <Button
          fullWidth
          variant='contained'
          endIcon={<ChevronRightOutlinedIcon />}
          onClick={handleCheckSend}
        >
          ACESSAR
        </Button>
      </Box>
    </>
  )
}