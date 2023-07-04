import { Box, Button, Card, Divider, Typography, useTheme, Link, useMediaQuery } from "@mui/material";

import HorizontalSplitOutlinedIcon from '@mui/icons-material/HorizontalSplitOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import { useState } from "react";
import { LoginModeOne, LoginModeTwo } from "../../shared/components";

export function Login() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'))

  const [loginMode, setLoginMode] = useState<'Mode1' | 'Mode2'>('Mode1')

  const toggleLoginMode = (mode: 'Mode1' | 'Mode2') => {
    mode === 'Mode1' ? setLoginMode('Mode1') : setLoginMode('Mode2')
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100%">
      <Card sx={{ width: theme.spacing(50) }} elevation={smDown ? 0 : 1}>
        <Box padding={5}>
          <Box>
            <Typography variant="h6" fontWeight="bold">
              FAÇA SEU LOGIN
            </Typography>
            <Divider sx={{ width: theme.spacing(3), borderWidth: "2px" }} color={theme.palette.primary.main} />
          </Box>

          <Box display="flex" marginTop={1}>
            <Button
              fullWidth
              variant={loginMode === 'Mode1' ? 'contained' : 'outlined'}
              disableElevation
              sx={{ borderRadius: 0, fontWeight: "bold" }}
              onClick={() => toggleLoginMode('Mode1')}>
              CPF/CNPJ
            </Button>

            <Button
              fullWidth
              variant={loginMode === 'Mode2' ? 'contained' : 'outlined'}
              disableElevation sx={{ borderRadius: 0, fontWeight: "bold" }}
              onClick={() => toggleLoginMode('Mode2')}>
              Grupo/Cota
            </Button>
          </Box>

          <Box marginTop={2} display="flex" flexDirection="column" gap={1}>
            {(loginMode === 'Mode1' && (
              <LoginModeOne />
            ))}

            {(loginMode === 'Mode2' && (
              <LoginModeTwo />
            ))}
          </Box>

          <Box marginTop={2}>
            <Button fullWidth variant="outlined" size="large" sx={{ padding: 2, textTransform: "capitalize" }} startIcon={<HorizontalSplitOutlinedIcon />}>
              Boleto Rápido
            </Button>
          </Box>

          <Divider sx={{ marginY: 3 }} />

          <Box component="nav" display="flex" justifyContent="space-between">
            <Link underline="none" display="flex" alignItems="center">
              <ChevronRightOutlinedIcon fontSize="small" />
              Esqueci minha senha
            </Link>
            <Link underline="none" display="flex" alignItems="center">
              <ChevronRightOutlinedIcon fontSize="small" />
              Valores a devolver
            </Link>
          </Box>
        </Box>
      </Card>
    </Box>
  )
}