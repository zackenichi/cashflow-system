import React from 'react';
import { VictoryChart, VictoryAxis, VictoryBar } from 'victory';

export interface CashflowGraphProps {
  data: { x: string; y: number }[];
}

const CashflowGraph: React.FC<CashflowGraphProps> = ({ data }) => {
  console.log(data);

  return (
    <VictoryChart domainPadding={20}>
      <VictoryAxis tickFormat={(tick) => tick} />
      <VictoryAxis dependentAxis tickFormat={(tick) => tick} />
      <VictoryBar
        data={data}
        x="x"
        y="y"
        style={{
          data: { fill: 'blue' },
        }}
      />
    </VictoryChart>
  );
};

export default CashflowGraph;
