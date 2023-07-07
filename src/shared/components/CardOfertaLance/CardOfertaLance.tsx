import { Box, Typography } from "@mui/material";
import GavelIcon from '@mui/icons-material/Gavel';
import BackHandIcon from '@mui/icons-material/BackHand';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';

import { CardLayout } from "../../layouts";

export function CardOfertaLance() {
  return (
    <>
      <CardLayout>
        <Box>
          <Typography variant='h6' fontWeight="bold" fontSize={14} display="flex" alignItems="center" gap={1}>
            <GavelIcon sx={{ padding: 0.2 }} fontSize="inherit" />
            Oferta Lance
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" gap={1} marginTop={1}>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="body2" fontWeight="bold" display="flex" alignItems="center" gap={1}>
              <BackHandIcon sx={{ border: "solid 1px #ccc", borderRadius: "3px", padding: 0.2 }} fontSize="inherit" />
              Lance Limitado
            </Typography>

            <Typography variant="body2" fontWeight="bold" display="flex" alignItems="center" gap={1}>
              <LeaderboardIcon sx={{ border: "solid 1px #ccc", borderRadius: "3px", padding: 0.2 }} fontSize="inherit" />
              Lance Fidelidade
            </Typography>

            <Typography variant="body2" fontWeight="bold" display="flex" alignItems="center" gap={1}>
              <ViewWeekIcon sx={{ border: "solid 1px #ccc", borderRadius: "3px", padding: 0.2 }} fontSize="inherit" />
              2° Lance Fixo
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" gap={1}>
            <Typography variant="body2" fontWeight="bold" display="flex" alignItems="center" gap={1}>
              <LeaderboardIcon sx={{ border: "solid 1px #ccc", borderRadius: "3px", padding: 0.2 }} fontSize="inherit" />
              Lance Livre
            </Typography>

            <Typography variant="body2" fontWeight="bold" display="flex" alignItems="center" gap={1}>
              <ViewWeekIcon sx={{ border: "solid 1px #ccc", borderRadius: "3px", padding: 0.2 }} fontSize="inherit" />
              Lance Fixo
            </Typography>
          </Box>
        </Box>
      </CardLayout>
    </>
  )
}