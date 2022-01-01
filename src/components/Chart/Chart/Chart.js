import ChartBar from '../ChartBar/ChartBar';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(expense => expense.value);
    let maxValue = Math.max(...dataPointValues)
    return (
        <div className='chart'>
           {props.dataPoints.map(dataPoint =>  <ChartBar value={dataPoint.value} label={dataPoint.label} key={dataPoint.label} maxValue={maxValue}/>)}
        </div>
    );
}

export default Chart;