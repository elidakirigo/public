import { Box, Typography, useTheme } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { tokens } from "../../Theme"
import { mockDataInvoices } from "../../data/mockData"
import Header from "../../Header"
import { useTheme } from "@mui/material"

const Invoices = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const columns = [{
		field: "id",
		headerName: "ID",
	},
	{
		field: "name",
		headerName: "Name",
		flex: 1,
		cellClassName: "name-column--cell"
	},
	{
		field: "age",
		headerName: "Age",
		flex: "number",
		headerAlign: 'left',
		align: "left",
	},
	{
		field: "phone",
		headerName: "Phone Number",
		flex: 1,
	},
	{
		field: "email",
		headerName: "Email",
		flex: 1,
	},
	{
		field: "cost",
		headerName: "Cost",
		flex: 1,
		renderCell: (params) => (
			<Typography color={colors.greenAccent[500]}>
				${params.row.cost}
			</Typography>
		)
	},
	{
		field: "date",
		headerName: "Date",
		flex: 1,
	}]

	return (
		<Box>
			<Header title="INVOICES" subtitle="list of Invoice balances"></Header>
			<Box m="40px 0 0 0" height="75vh" sx={{
				"& .MuiDataGrid-root": {
					border: "none"
				},
				"& .MuiDataGrid-cell": {
					borderBottom: "none"
				},
				"& .neme-column-cell": {
					color: colors.greenAccent[300]
				},
				"& .MuiDataGrid-columnHeaders": {
					backgroundColor: colors.blueAccent[700]
				},
				"& .MuiDataGrid-virtualScroller": {
					backgroundColor: colors.primary[400]
				},
				"& .MuiDataGrid-footerContainer": {
					borderTop: "none",
					backgroundColor: colors.blueAccent[700]
				},
				"& .MuiCheckbox-root": {
					color: `${colors.greenAccent[200]} !important`
				},
			}}>
				<DataGrid rows={mockDataContacts} columns={columns} omponents={{ Toolbar: GridToolbar }} checkboxSelection/>
			</Box>
		</Box>
	)
}

export default Invoices