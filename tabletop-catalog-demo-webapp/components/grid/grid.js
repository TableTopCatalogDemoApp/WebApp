import GridHeader from './grid-header'
import GridRow from './grid-row'

export default function Grid({ headers, rows, openUrlPrefix }) {
    return (
        <table className="table table-hover">
            <thead>
                <GridHeader headers={ headers }>
                </GridHeader>
            </thead>
            <tbody>
                { rows.map((cells, index) => {
                    return (
                        <GridRow key={ "row" + index } cells={ cells } openUrlPrefix={ openUrlPrefix }>
                        </GridRow>
                    )
                }) }
            </tbody>
        </table>
    );
}