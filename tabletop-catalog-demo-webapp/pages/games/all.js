import Layout from '../../layouts/default'

import Grid from '../../components/grid/grid'

import GamesService from '../../services/games'

export async function getServerSideProps() {
    const games = (await GamesService.getAllGames())
        .map(game => {
            return [
                game.id,
                game.title,
                game.yearPublished,
                game.ageFrom,
                game.playersFrom,
                game.playersTo,
                game.sessionFrom,
                game.sessionTo
            ]
        });

    return {
        props: {
            headers: [
                "Title",
                "Year published",
                "Age from",
                "Players from",
                "Players to",
                "Session from (minutes)",
                "Session to (minutes)",
                ""
            ],
            data: games
        }
    }
}

export default function Games({ headers, data }) {
    return (
        <Layout activeMenuTitle="Games">
            <h1>Games</h1>
            <Grid headers={ headers } rows={ data } openUrlPrefix="/games/">
            </Grid>
        </Layout>
    )
}
