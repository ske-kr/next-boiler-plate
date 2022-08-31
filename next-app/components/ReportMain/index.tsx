import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import React from "react";


export const ReportMain = () => {
    const [view, setView] = React.useState('list');

    const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
    };

    return (
        <>
            <ToggleButtonGroup
                orientation="horizontal"
                value={view}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="list" aria-label="list">
                
                </ToggleButton>
                <ToggleButton value="module" aria-label="module">
                    
                </ToggleButton>
                <ToggleButton value="full" aria-label="full">

                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}