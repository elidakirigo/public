import { Box, Button, IconButton, Typography, useTheme } from "@mui/material"
import Header from "../../components/Header"
import { tokens } from "../../Theme"
import { mockTransactions } from "../../data/mockData"
import { DownloadOutlinedIcon } from "@mui/icons-material/DownloadOutlined"
import { EmailIcon } from "@mui/icons-material/Email"
import { PointOfSaleIcon } from "@mui/icons-material/PointOfSale"
import { PersonAddIcon } from "@mui/icons-material/PersonAdd"
import { TrafficIcon } from "@mui/icons-material/Traffic"
import LineChart from "../../components/LineChart"
import BarChart from "../../components/BarChart"
import PieChart from "../../components/PieChart"
import GeographyChart from "../../components/GeographyChart"
import StatBox from "../../components/StatBox"
import ProgressCircle from "../../components/ProgressCircle"



const Dashboard = () => {
	const  theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Box m="20px">
			<Box display="flex" justify-content="space-between" alignItems="center">
				<Header title="DASHBOARD" subtitle="welcome to your dashboard" />
			</Box>
			<Box>
				<Button>
					
				</Button>
			</Box>
		</Box>
	)
}

export default Dashboard