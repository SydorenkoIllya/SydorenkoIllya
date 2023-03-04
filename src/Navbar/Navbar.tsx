import { AppBar, Button, IconButton, Toolbar } from "@mui/material";
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks/TypedHooks";
import { useTranslation } from "react-i18next";
import { useState } from "react";


const Navbar = () => {
    const [language, setLanguage] = useState<string>(localStorage.getItem('lng') || 'en')
    const isLogged = useAppSelector(state => state.route.isLogged)
    const { t, i18n } = useTranslation()
    console.log(language);
    const changeLanguageHandler = () => {
        if (language === 'ua') {
            i18n.changeLanguage('en')
            setLanguage('en')
            localStorage.setItem('lng', 'en')
        } else {
            i18n.changeLanguage('ua')
            setLanguage('ua')
            localStorage.setItem('lng', 'ua')
        }
    }

    const CustomLink = (props: any) => <Link style={{ textDecoration: 'none', color: 'white' }} {...props} children={props.children} />

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <CustomLink to='/'>
                        <Button
                            color='inherit'
                            component='span'
                            sx={{ cursor: 'pointer', maxWidth: '100px' }}>
                            {t('main')}
                        </Button>
                    </CustomLink>


                    <CustomLink style={{ marginLeft: 'auto', marginRight: '0.2rem' }} to='/news'>
                        <Button color="inherit" style={{ color: 'white' }}>
                            {t('news')}
                        </Button>
                    </CustomLink>

                    <CustomLink to={isLogged ? '/profile' : '/login'}>
                        <Button color="inherit">
                            {isLogged ? t('profile') : t('login')}
                        </Button>
                    </CustomLink>
                    <IconButton onClick={changeLanguageHandler} sx={{ color: 'white' }} aria-label="change language">
                        <LanguageIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;