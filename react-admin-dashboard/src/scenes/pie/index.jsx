import { Box } from "@mui/material";
import Header from "../../components/Header"
import BarChart from "../../components/BarChart"

const Pie = ()=>{
	return (
		<Box m="20px">
			<Header title="Pie Chart" subtitle="Simple Pie Chart"/>
			<Box height="75vh">
				<BarChart />
			</Box>
		</Box>
	)
}

export default Pie;