import Layout from '../../layouts/default'

import Form from '../../components/form/form'

import GamesService from '../../services/games'

export async function getServerSideProps(context) {
    const id = context.params.id; 

    const game = await GamesService.getGameById(id);

    return {
        props: {
            labels: [
                "Title",
                "Description",
                "Year published",
                "Age from",
                "Players from",
                "Players to",
                "Session from",
                "Session to",
            ],
            values: [
                game.title,
                (game.description   || "").trim(),
                game.yearPublished  || "",
                game.ageFrom        || "",
                game.playersFrom    || "",
                game.playersTo      || "",
                game.sessionFrom    || "",
                game.sessionTo      || ""
            ]
        }
    }
}

export default function Game({ labels, values }) {
    return (
        <Layout activeMenuTitle="Games">
            <h1>Game</h1>
            <Form labels={ labels } values={ values }>
            </Form>
        </Layout>
    )
}