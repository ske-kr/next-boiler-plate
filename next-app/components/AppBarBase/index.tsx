import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    '@media all': {
        minHeight: 100,
    },
}));

export const AppBarBase = () => {
    return (
        <AppBar
            style={{ backgroundColor: 'white' }}
            sx={{
                width: '100%',
                boxShadow: 1
            }}

            position="fixed"
            enableColorOnDark
        >
            <StyledToolbar>
                <Typography
                    variant="h5"
                    component="div"
                    color={'black'}
                >
                    Logo
                </Typography>
            </StyledToolbar>
        </AppBar>
    )
}