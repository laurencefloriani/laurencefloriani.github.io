import { Typography } from "@mui/material";

export default function TitleText({ children }) {
  return (
    <Typography
      variant="h2"
      style={{
        fontWeight: "bold",
      }}
    >
      {children}
    </Typography>
  );
}
