import FormRow from './form-row'

export default function Form({ labels, values }) {
    return (
        <form>
            { labels.map((label, index) => {
                return (
                    <FormRow key={ "row" + index } label={ label } value={ values[index] }>
                    </FormRow>
                )
            }) }
        </form>
    );
}