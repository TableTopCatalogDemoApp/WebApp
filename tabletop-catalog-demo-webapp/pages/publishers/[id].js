import Layout from '../../layouts/default'

import Form from '../../components/form/form'

import PublishersService from '../../services/publishers'

export async function getServerSideProps(context) {
    const id = context.params.id; 

    const publisher = await PublishersService.getPublisherById(id);

    return {
        props: {
            labels: [
                "Title"
            ],
            values: [
                publisher.title
            ]
        }
    }
}

export default function Publisher({ labels, values }) {
    return (
        <Layout activeMenuTitle="Publishers">
            <h1>Publisher</h1>
            <Form labels={ labels } values={ values }>
            </Form>
        </Layout>
    )
}