import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";

interface MainNavProps {
    collapsed?: boolean;
}
export const MainNav = ({ collapsed }: MainNavProps) => {

    const [openReport, setOpenReport] = React.useState(false);

    const handleClick = (value: string) => {
        if (value == 'report') {
            setOpenReport(!openReport);
        }
    };

    return (
        <>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
            >
                <ListItemButton onClick={() => { handleClick('report') }}>
                    <ListItemText primary="제보" />
                </ListItemButton>
                <Collapse in={openReport} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 5 }}>
                            <ListItemText primary="제보 합니다"/>

                        </ListItemButton>
                        <ListItemButton sx={{ pl: 5 }}>
                            <ListItemText primary="제보 정보" />
                        </ListItemButton>

                        <ListItemButton sx={{ pl: 5 }}>
                            <ListItemText primary="제보 해주세요" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 5 }}>
                            <ListItemText primary="언론 병폐 고발" />
                        </ListItemButton>
                    </List>
                </Collapse>
                <ListItemButton>
                    <ListItemText primary="언론사" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="커뮤니티" />
                </ListItemButton>
                <ListItemButton>
                    <ListItemText primary="사이트소개" />
                </ListItemButton>
            </List>
        </>

    )

}