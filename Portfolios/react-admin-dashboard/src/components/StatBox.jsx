import { Box, Typography, useTheme } from "@mui/material"
import { tokens } from "../Theme"
import ProgressCircle from "./ProgressCircle" 

const StatBox = ({ title, subtitle, icon, progress, increase }) => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Box width="100%" m="0 30px">
			<Box display="flex" justifyContent="space-between">
				<Box>
					{icon}
					<Typography variant="h4" font-weight="bold" sx={{ color: colors.grey[100] }}>
						{title}
					</Typography>
				</Box>
				<Box>
					<ProgressCircle progress={pprogress} />
				</Box>

				<Box display="flex" justifyContent="space-between"> 
					<Typography variant="h5" sx={{ color: colors.greenAccent[100] }}>
						{subtitle}
					</Typography>

					<Typography variant="h5" font-weight="italic" sx={{ color: colors.greenAccent[600] }}>
						{increase}
					</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default StatBox;