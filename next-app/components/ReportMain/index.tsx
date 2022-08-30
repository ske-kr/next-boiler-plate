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
                    <button><img src="./img/google.png" alt="list"/></button>
                </ToggleButton>
                <ToggleButton value="module" aria-label="module">
                    <button><img src="./img/google.png" alt="module" /></button>
                </ToggleButton>
                <ToggleButton value="full" aria-label="full">
                    <button><img src="./img/google.png" alt="full"  /></button>
                </ToggleButton>
            </ToggleButtonGroup>
        </>
    )
}