import { Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

export default function InnerText({
  bold = false,
  italic = false,
  color = blueGrey[800],
  align = "inherit",
  size = 20,
  children,
}) {
  return (
    <Typography
      variant="body1"
      style={{
        fontWeight: bold ? "bold" : "normal",
        fontStyle: italic ? "italic" : "normal",
        color: color,
        textAlign: align,
        fontSize: size,
      }}
    >
      {children}
    </Typography>
  );
}
