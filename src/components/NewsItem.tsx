import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { Data } from "../hooks/useHttp"
import './newsitem.css'
interface NewsItemData extends Data {
    deleteNews: Function
}
const NewsItem = ({ name, description, thumbnail, deleteNews, id }: NewsItemData) => {
    return (
        <Grid md={3} xs={12} item>
            <Card sx={{ height: '100%', position: 'relative' }}>
                <CardMedia component='img' sx={{ height: 230, backgroundSize: 'cover', objectFit: "cover" }} image={thumbnail.path + '.' + thumbnail.extension} title={description} />
                <CardContent>
                    <Typography sx={{ fontWeight: '700', fontSize: '14px' }}>
                        {name}
                    </Typography>
                    <Typography sx={{ fontWeight: '500', fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', height: '38px', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', display: '-webkit-box' }}>
                        {description || 'No description provided'}
                    </Typography>
                    <IconButton onClick={() => deleteNews(id)} sx={{ position: 'absolute', right: '0.2rem', bottom: '0rem' }} aria-label="delete" size="small">
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </CardContent>
            </Card>
        </Grid>
    )
}


export default NewsItem