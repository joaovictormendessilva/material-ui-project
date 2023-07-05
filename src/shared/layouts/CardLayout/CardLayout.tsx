import { Card, useTheme } from "@mui/material";

interface ICardLayoutProps {
  children: React.ReactNode
}

export function CardLayout({ children }: ICardLayoutProps) {

  const theme = useTheme();

  return (
    <Card sx={{ width: theme.spacing(36), padding: 2 }}>
      {children}
    </Card>
  )
}