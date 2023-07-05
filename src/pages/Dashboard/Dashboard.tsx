import { Box } from '@mui/material'
import { CardConsorcioInfo, CardOfertaLance } from '../../shared/components';

export function Dashboard() {

  return (
    <Box padding={2}>
      <Box display="flex" gap={3}>
        <Box>
          <CardConsorcioInfo />
        </Box>

        <Box>
          <CardOfertaLance />
        </Box>
      </Box>
    </Box>
  )
}