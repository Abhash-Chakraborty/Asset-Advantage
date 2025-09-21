// client/src/scenes/dashboard/PieChart.tsx

import { Box, Typography, useTheme } from "@mui/material";
import { PieChart, Pie, Cell } from "recharts";
import DashboardBox from "@/components/DashboardBox";
import FlexBetween from "@/components/FlexBetween";

// Helper function to convert the currency string to a number
const currencyStringToNumber = (currencyString: string) => {
  return Number(currencyString.replace(/[^0-9.-]+/g, ""));
};

const PieChartComponent = ({ data }) => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500], palette.tertiary[500]];

  const pieChartData = Object.entries(data).map(([key, value]) => {
    return {
      name: key,
      value: currencyStringToNumber(value as string),
    };
  });

  return (
    <DashboardBox gridArea="c">
      <Box 
        height="100%" 
        display="flex" 
        flexDirection="column" 
        justifyContent="space-between" 
        alignItems="center"
        p="1rem"
      >
        <FlexBetween width="100%">
            <Box />
            <Typography variant="h4">Expenses by Category</Typography>
            <Box />
        </FlexBetween>

        <PieChart width={110} height={100}>
          <Pie
            stroke="none"
            data={pieChartData}
            innerRadius={18}
            outerRadius={38}
            paddingAngle={2}
            dataKey="value"
          >
            {pieChartData.map((_entry, index) => (
              <Cell key={`cell-${index}`} fill={pieColors[index]} />
            ))}
          </Pie>
        </PieChart>

        <Typography variant="h5" mt="0.1rem">
          Chart shows expense breakdown.
        </Typography>

      </Box>
    </DashboardBox>
  );
};

export default PieChartComponent;