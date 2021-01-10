import Link from 'next/link'

export default function GridRow({ cells, openUrlPrefix }) {
    return (
        <tr>
            { cells.map((cell, index) => {
                if (index != 0) {
                    return (
                        <td key={ "cell" + index }>
                            { cell }
                        </td>
                    )
                }
            }) }
            <td>
                <Link href={ openUrlPrefix + cells[0] }>
                    <a>
                        Open
                    </a>
                </Link>
            </td>
        </tr>
    );
}