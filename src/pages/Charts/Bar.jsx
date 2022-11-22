import React from 'react'

import { 
  ChartComponent, 
  SeriesCollectionDirective,
  SeriesDirective,
  ColumnSeries,
  Inject,
  Category, Legend, Tooltip 
} from '@syncfusion/ej2-react-charts';

import { 
  barChartData,
  barPrimaryXAxis, 
  barPrimaryYAxis 
} from '../../data/dummy';

import { useStateContext } from '../../contexts/ContextProvider';

import { Header } from '../../components';

const Bar = () => {

  const {currentMode} = useStateContext();

  return (
    <div className='
      m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg
      rounded-3xl
    '>
      <Header category="Chart" title="Column Chart"/>
      <div className='w-full'>
        <ChartComponent
          id='charts'
          height='420px'
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          tooltip={{
            enable:true
          }}
          background={currentMode==='Dark' ? '#33373E' : "#fff"}
        >
          <Inject services={[
            ColumnSeries, Legend, Tooltip, Category
          ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
            key={0}
            xName='x' 
            yName='y' 
            name='Gold' 
            type='Column'
            dataSource={barChartData[0]}
            />
            <SeriesDirective
            key={1}
            xName='x' 
            yName='y' 
            name='Silver' 
            type='Column'
            dataSource={barChartData[1]}
            />
            <SeriesDirective
            key={2}
            xName='x' 
            yName='y' 
            name='Bronze' 
            type='Column'
            dataSource={barChartData[2]}
            />           
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>

    )
}

export default Bar;