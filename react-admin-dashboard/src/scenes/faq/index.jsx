import { Box, useTheme, Typography } from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { tokens } from "../../Theme"
import  Accordion  from "@mui/material/Accordion"

const FAQ = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	return (
		<Box m="20px">
			<Header title="FAQ" subtitle="Frequently asked Questions Page" />

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						An Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Irure duis pariatur quis consequat. Ullamco deserunt et proident duis. Et ullamco consequat ut ullamco dolore enim elit ut adipisicing aliqua et. Veniam reprehenderit minim nisi quis culpa deserunt in cupidatat cillum sit aute esse.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						Another Important Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Irure duis pariatur quis consequat. Ullamco deserunt et proident duis. Et ullamco consequat ut ullamco dolore enim elit ut adipisicing aliqua et. Veniam reprehenderit minim nisi quis culpa deserunt in cupidatat cillum sit aute esse.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						Your Favourite Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Irure duis pariatur quis consequat. Ullamco deserunt et proident duis. Et ullamco consequat ut ullamco dolore enim elit ut adipisicing aliqua et. Veniam reprehenderit minim nisi quis culpa deserunt in cupidatat cillum sit aute esse.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						Some Random Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Irure duis pariatur quis consequat. Ullamco deserunt et proident duis. Et ullamco consequat ut ullamco dolore enim elit ut adipisicing aliqua et. Veniam reprehenderit minim nisi quis culpa deserunt in cupidatat cillum sit aute esse.
					</Typography>
				</AccordionDetails>
			</Accordion>

			<Accordion defaultExpanded>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography color={colors.greenAccent[500]} variant="h5">
						The Final Question
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						Irure duis pariatur quis consequat. Ullamco deserunt et proident duis. Et ullamco consequat ut ullamco dolore enim elit ut adipisicing aliqua et. Veniam reprehenderit minim nisi quis culpa deserunt in cupidatat cillum sit aute esse.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</Box>
	)
}