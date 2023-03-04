import { Box, Button, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useAppDispatch } from "../hooks/TypedHooks"
import { setLogOut } from "../routes/routeSlice"

export default function ProfilePage() {

    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1>{t('profile')}</h1>
                <Box
                    component="img"
                    sx={{
                        mt: '1rem',
                        objectFit: 'cover',
                        height: 200,
                        width: 200,
                        maxHeight: { xs: 233, md: 167 },
                        maxWidth: { xs: 233, md: 167 },
                        borderRadius: '50%'
                    }}
                    alt="profile picture"
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                />
                <Typography sx={{ fontSize: '20px', mt: '1rem' }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat dicta deserunt neque tempora inventore, eum deleniti odio iusto cumque atque facilis illo ipsa impedit ut animi. Facilis eius minus vel.
                </Typography>
                <Typography sx={{ fontSize: '16px', mt: '1rem' }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ad exercitationem sed neque assumenda beatae tempore qui velit. Quisquam earum magni totam nam quo minus voluptatibus, ab placeat quos! Expedita.
                </Typography>
                <Button variant='contained' onClick={() => dispatch(setLogOut())}>
                    {t('logout')}
                </Button>
            </Box>

        </>

    )
}