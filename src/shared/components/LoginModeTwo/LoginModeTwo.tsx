import { TextField, Box, Button } from "@mui/material";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { ChangeEvent, useEffect, useState } from "react";

interface IInputDataModeTwoProps {
  grupo: string
  cota: string
  versao: string
  password: string
}

export function LoginModeTwo() {

  const [inputDataModeTwo, setInputDataModeTwo] = useState<IInputDataModeTwoProps>({} as IInputDataModeTwoProps);
  const [isEmptyCheck, setIsEmptyCheck] = useState({
    grupo: false,
    cota: false,
    versao: false,
    password: false
  })

  const handleChangeInputs = (e: ChangeEvent<HTMLInputElement>) => {
    setInputDataModeTwo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleCheckLogin = () => {
    const isEmptyFields = {
      cota: !inputDataModeTwo.cota,
      grupo: !inputDataModeTwo.grupo,
      versao: !inputDataModeTwo.versao,
      password: !inputDataModeTwo.password
    };

    setIsEmptyCheck(isEmptyFields);

    if (Object.values(isEmptyFields).every(field => !field)) {
      console.log("Sucesso Mode 2", inputDataModeTwo);
    } else {
      console.log("Erro Mode 2", inputDataModeTwo);
    }
  };

  useEffect(() => {
    inputDataModeTwo.cota && setIsEmptyCheck((prev) => ({ ...prev, cota: false }))
    inputDataModeTwo.grupo && setIsEmptyCheck((prev) => ({ ...prev, grupo: false }))
    inputDataModeTwo.versao && setIsEmptyCheck((prev) => ({ ...prev, versao: false }))
    inputDataModeTwo.password && setIsEmptyCheck((prev) => ({ ...prev, password: false }))
  }, [inputDataModeTwo.cota, inputDataModeTwo.grupo, inputDataModeTwo.versao, inputDataModeTwo.password])


  return (
    <>
      <Box display="flex" gap={1}>
        <TextField
          name="grupo"
          type="number"
          size="small"
          placeholder="Grupo"
          onChange={handleChangeInputs}
          error={isEmptyCheck.grupo}
          helperText={isEmptyCheck.grupo && "Campo obrigatório."}
        />

        <TextField
          name="cota"
          type="number"
          size="small"
          placeholder="Cota"
          onChange={handleChangeInputs}
          error={isEmptyCheck.cota}
          helperText={isEmptyCheck.cota && "Campo obrigatório."}
        />
        <TextField
          name="versao"
          type="number"
          size="small"
          placeholder="Versão"
          onChange={handleChangeInputs}
          error={isEmptyCheck.versao}
          helperText={isEmptyCheck.versao && "Campo obrigatório."}
        />
      </Box>

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