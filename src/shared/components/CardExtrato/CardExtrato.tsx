import { Typography, List, ListItem, ListItemText, Divider, Link } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import { CardLayout } from "../../layouts";

export function CardExtrato() {
  return (
    <CardLayout>
      <Typography variant='h6' fontWeight="bold" fontSize={14} display="flex" alignItems="center" gap={1}>
        Oferta Lance
      </Typography>

      <List>

        <ListItem disablePadding >
          <CheckCircleIcon fontSize="inherit" color="error" />
          <ListItemText>
            <Typography variant="body2" fontSize="small">
              005
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="body2" fontSize="small">
              15/07/2023
            </Typography>
          </ListItemText>
          <ListItemText sx={{ textAlign: "right" }}>
            <Typography variant="body2" fontWeight="bold" fontSize="small">
              R$ 66,24
            </Typography>
          </ListItemText>
        </ListItem>

        <Divider />

        <ListItem disablePadding >
          <CheckCircleIcon fontSize="inherit" color="success" />
          <ListItemText>
            <Typography variant="body2" fontSize="small">
              004
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="body2" fontSize="small">
              15/07/2023
            </Typography>
          </ListItemText>
          <ListItemText sx={{ textAlign: "right" }}>
            <Typography variant="body2" fontWeight="bold" fontSize="small">
              R$ 577,87
            </Typography>
          </ListItemText>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <CheckCircleIcon fontSize="inherit" color="success" />
          <ListItemText>
            <Typography variant="body2" fontSize="small">
              003
            </Typography>
          </ListItemText>
          <ListItemText>
            <Typography variant="body2" fontSize="small">
              15/07/2023
            </Typography>
          </ListItemText>
          <ListItemText sx={{ textAlign: "right" }}>
            <Typography variant="body2" fontWeight="bold" fontSize="small">
              R$ 577,87
            </Typography>
          </ListItemText>
        </ListItem>

        <ListItem disablePadding>
          <ListItemText sx={{ textAlign: 'right' }}>
            <Typography fontSize={14} fontWeight='bold' variant='body2' display="flex" alignItems="center" justifyContent="flex-end">
              <Link
                underline='none'
                sx={{ cursor: 'pointer' }}
                display="flex"
                alignItems="center" >
                Ver detalhes
                <ArrowRightAltIcon />
              </Link>
            </Typography>
          </ListItemText>
        </ListItem>

      </List>
    </CardLayout>
  )
}