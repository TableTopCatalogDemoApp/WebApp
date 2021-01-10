import Layout from '../../layouts/default'

import Form from '../../components/form/form'

import PersonsService from '../../services/persons'

export async function getServerSideProps(context) {
    const id = context.params.id; 

    const person = await PersonsService.getPersonById(id);

    return {
        props: {
            labels: [
                "Last name",
                "First name",
            ],
            values: [
                person.lastName,
                person.firstName
            ]
        }
    }
}

export default function Person({ labels, values }) {
    return (
        <Layout activeMenuTitle="Persons">
            <h1>Person</h1>
            <Form labels={ labels } values={ values }>
            </Form>
        </Layout>
    )
}