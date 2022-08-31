import styled from "@emotion/styled";
import { Box, CssBaseline, Divider } from "@mui/material";
import { HTMLAttributes } from "react";
import { Col, Row } from "react-bootstrap";
import { AppBarBase } from "../AppBarBase";
import { MainNav } from "../MainNav";

interface MainLayoutProps extends HTMLAttributes<HTMLDivElement> {

}


export const MainLayout = ({ children, ...props }: MainLayoutProps) => {
    const StyledMainLayout = styled.div`
        height: 100%;

    .main-nav__inner {
    height: 100%;
  }
`;

    return (
        <StyledMainLayout {...props} key='main'>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBarBase />
                <Box
                    component="nav"
                    sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } ,border:'1px, grey, solid'}}
                    style={{ marginTop: 100}}
                    
                >
                    <MainNav />
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - 240px)` } }}
                    style={{
                        padding: 24, marginTop: 150
                    }}
                >
                    {children}
                </Box>
            </Box>
        </StyledMainLayout>
    )

}