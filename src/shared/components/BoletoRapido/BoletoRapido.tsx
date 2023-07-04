import { Typography, Box, TextField, Button } from '@mui/material'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';

import { ChangeEvent, useEffect, useState } from 'react';

interface IBoletoRapidoProps {
  backToLogin: () => void
}

interface IBoletoRapidoFieldsProps {
  cpf_cnpj: string
}

export function BoletoRapido({ backToLogin }: IBoletoRapidoProps) {

  const [boletoRapidoFields, setBoletoRapidoFields] = useState<IBoletoRapidoFieldsProps>({} as IBoletoRapidoFieldsProps);
  const [isEmptyCheck, setIsEmptyCheck] = useState({
    cpf_cnpj: false
  })

  const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setBoletoRapidoFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleCheckSend = () => {
    const isEmptyFields = {
      cpf_cnpj: !boletoRapidoFields.cpf_cnpj
    }

    setIsEmptyCheck(isEmptyFields);

    if (Object.values(isEmptyFields).every(field => !field)) {
      console.log("Sucesso Boleto", boletoRapidoFields)
    }
    else {
      console.log("Erro Boleto", boletoRapidoFields)
    }
  }

  useEffect(() => {
    boletoRapidoFields.cpf_cnpj && setIsEmptyCheck((prev) => ({ ...prev, cpf_cnpj: false }))
  }, [boletoRapidoFields.cpf_cnpj])

  return (
    <>
      <Typography variant='h6' fontSize={14} component="label">
        Digite abaixo os dados para gerar os boletos de cobrança:
      </Typography>

      <Box>
        <TextField
          name='cpf_cnpj'
          size='small'
          fullWidth
          placeholder='CPF/CNPJ'
          onChange={handleChangeInputs}
          error={isEmptyCheck.cpf_cnpj}
          helperText={isEmptyCheck.cpf_cnpj && "Campo obrigatório."}
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