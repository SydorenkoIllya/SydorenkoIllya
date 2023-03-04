import { Box, Button, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation()


    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h1>{t('main')}</h1>
            <Typography sx={{ fontSize: '20px' }}>{t('namesurname')}</Typography>
            <Typography sx={{ fontSize: '18px' }}>{t('skills')}</Typography>
            <Typography sx={{ fontSize: '18px' }}>{t('courses')}</Typography>
            <Button sx={{ mt: '1rem' }} variant='outlined'><Link href="https://github.com/SydorenkoIllya">GitHub</Link></Button>
        </Box>

    )
}


export default MainPage;