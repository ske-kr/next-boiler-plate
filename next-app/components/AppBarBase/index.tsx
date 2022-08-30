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
            enableColorOnDark
        >
            <StyledToolbar>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    color={'black'}
                    sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
                >
                    Logo
                </Typography>
            </StyledToolbar>
        </AppBar>
    )
}