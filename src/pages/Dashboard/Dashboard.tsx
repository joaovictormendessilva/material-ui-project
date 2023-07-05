import { Box } from '@mui/material'
import { CardConsorcioInfo, CardOfertaLance, CardSegundaViaBoleto } from '../../shared/components';

export function Dashboard() {

  return (
    <Box padding={2}>
      <Box display="flex" gap={2}>
        <Box>
          <CardConsorcioInfo />
        </Box>

        <Box display="flex" flexDirection="column" gap={3}>
          <CardOfertaLance />
          <CardSegundaViaBoleto />
        </Box>
      </Box>
    </Box>
  )
}