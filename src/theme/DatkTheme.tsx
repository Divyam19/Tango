import { createTheme } from "@mui/material";

export const darktheme=createTheme({
    palette:{
        mode:"dark",
        primary:{
            main:"#e91e63"
        },
        secondary:{
            main:"#5A20CB"
        },
        common:{
            black:"#242B2E"
        },
        background:{
            default:"#0D0D0D",
            paper:"#0D0D0D",

        },
        text:{
            primary:"#111111"
        }
    }
})