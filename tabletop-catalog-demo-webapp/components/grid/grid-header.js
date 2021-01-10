export default function GridHeader({ headers }) {
    return (
        <tr>
            { headers.map((header, index) => {
                return (
                    <th key={ "header" + index } scope="col">
                        { header }
                    </th>
                )
            }) }
        </tr>
    );
}