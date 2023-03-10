import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
   const dataPoints = props.dataPoints;
   const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
   const maxValue = Math.max(...dataPointValues);

   return (
      <div className="chart">
         {dataPoints.map((dataPoint) => (
            <ChartBar
               value={dataPoint.value}
               maxValue={maxValue}
               label={dataPoint.label}
               key={dataPoint.label}
            />
         ))}
      </div>
   );
};

export default Chart;
