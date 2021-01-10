import Layout from '../../layouts/default'

import Grid from '../../components/grid/grid'

import PublishersService from '../../services/publishers'

export async function getServerSideProps() {
    const publishers = (await PublishersService.getAllPublishers())
        .map(publisher => {
            return [
                publisher.id,
                publisher.title
            ]
        });

    return {
        props: {
            headers: [
                "Title",
                ""
            ],
            data: publishers
        }
    }
}

export default function Publishers({ headers, data }) {
    return (
        <Layout activeMenuTitle="Publishers">
            <h1>Publishers</h1>
            <Grid headers={ headers } rows={ data } openUrlPrefix="/publishers/">
            </Grid>
        </Layout>
    )
}
