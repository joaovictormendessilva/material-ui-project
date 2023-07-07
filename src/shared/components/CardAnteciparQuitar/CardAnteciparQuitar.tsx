import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import FastForwardOutlinedIcon from '@mui/icons-material/FastForwardOutlined';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';

import { CardLayout } from "../../layouts";

export function CardAnteciparQuitar() {
  return (
    <CardLayout>
      <Box>
        <Typography variant='h6' fontWeight="bold" fontSize={14} display="flex" alignItems="center" gap={1}>
          <FastForwardOutlinedIcon sx={{ padding: 0.2 }} fontSize="inherit" />
          Antecipar/Quitar
        </Typography>
      </Box>

      <Box>
        <List sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <ListItem disablePadding>
            <ListItemText>
              <Typography variant="body2" fontWeight="bold" display="flex" alignItems="center" gap={1}>
                <ViewWeekIcon sx={{ border: "solid 1px #ccc", borderRadius: "3px", padding: 0.2 }} fontSize="inherit" />
                Antecipar Parcelas
              </Typography>
            </ListItemText>
          </ListItem>

          <ListItem disablePadding>
            <ListItemText>
              <Typography variant="body2" fontWeight="bold" display="flex" alignItems="center" gap={1}>
                <ViewWeekIcon sx={{ border: "solid 1px #ccc", borderRadius: "3px", padding: 0.2 }} fontSize="inherit" />
                Quitar Saldo Devedor
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </CardLayout>
  )
}