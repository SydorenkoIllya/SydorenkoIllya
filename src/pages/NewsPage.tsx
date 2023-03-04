import { Box, Button, CircularProgress, Grid } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import { useAppDispatch, useAppSelector } from "../hooks/TypedHooks";
import { Data, useHttp } from "../hooks/useHttp";
import { plusTimesClicked } from "../routes/routeSlice";

export default function NewsPage() {
    const [fetching, isFetching] = useState<boolean>(true)
    const [heroesList, setHeroesList] = useState<Data[]>([])
    const { request } = useHttp()
    const timesClicked = useAppSelector(state => state.route.timesClicked)
    const offsetCount = 80
    const dispatch = useAppDispatch()
    const mainEndPoint = 'https://gateway.marvel.com:443/v1/public/characters?limit=';


    useEffect(() => {
        request(`${mainEndPoint + timesClicked * 12}&offset=${offsetCount}&`)
            .then(data => setHeroesList(data)).then(() => isFetching(false))
        console.log(timesClicked);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const loadMoreNews = useCallback(() => {
        request(`https://gateway.marvel.com:443/v1/public/characters?limit=12&offset=${offsetCount + (timesClicked * 12)}&`)
            .then(data => setHeroesList([...heroesList, ...data]))
        dispatch(plusTimesClicked())
        //eslint-disable-next-line
    }, [heroesList])

    const deleteSelectedNews = (id: number) => {
        setHeroesList(heroesList.filter(i => i.id !== id))
    }



    return (
        <>
            {fetching ?
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '15rem' }}>
                    <CircularProgress />
                </Box>
                :
                <Grid container spacing={2}>
                    {heroesList && heroesList.map((item) => {
                        return <NewsItem key={item.id} {...item} deleteNews={deleteSelectedNews} />
                    })}
                </Grid>
            }
            {!fetching &&
                <Box textAlign='center' sx={{ my: 3 }}>
                    <Button onClick={loadMoreNews} variant='contained'>
                        Load more
                    </Button>
                </Box>
            }
        </>
    )
}


