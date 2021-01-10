import Layout from '../../layouts/default'

import Grid from '../../components/grid/grid'

import PersonsService from '../../services/persons'

export async function getServerSideProps() {
    const persons = (await PersonsService.getAllPersons())
        .map(person => {
            return [
                person.id,
                person.lastName,
                person.firstName
            ]
        });

    return {
        props: {
            headers: [
                "Last name",
                "First name",
                ""
            ],
            data: persons
        }
    }
}

export default function Persons({ headers, data }) {
    return (
        <Layout activeMenuTitle="Persons">
            <h1>Persons</h1>
            <Grid headers={ headers } rows={ data } openUrlPrefix="/persons/">
            </Grid>
        </Layout>
    )
}
