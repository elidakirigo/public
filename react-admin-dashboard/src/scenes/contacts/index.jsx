import { Box } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { tokens } from "../../Theme"
import { mockDataContacts } from "../../data/mockData"
import Header from "../../Header"
import { useTheme } from "@mui/material"

const Contacts = () => {
	const theme = useTheme()
	const colors = tokens(theme.palette.mode)

	const columns = [{
		field: "id",
		headerName: "ID",
		flex: 0.5
	},
	{ field: "registrarId", headerName: "Registrar ID", },
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
		field: "address",
		headerName: "Address",
		flex: 1,
	},
	{
		field: "city",
		headerName: "City",
		flex: 1,
	},
	{
		field: "zipcode",
		headerName: "Zipcode",
		flex: 1,
	},
	{
		field: "access",
		headerName: "Access Level",
		flex: 1,
		renderCell: ({ row: { access } }) => {
			return (
				<Box width="60%" m="0 auto" p="5px" display="flex" justifyContent="center" backgroundColor={access === "admin" ? colors.greenAccent[600] : colors.greenAccent[700]} borderRadius="4px">
					{access === "admin" && <AdminPanelSettingsOutlinedIcon />}
					{access === "manager" && <SecurityOutlinedIcon />}
					{access === "user" && <LockOpenOutlinedIcon />}
					<Typography color={colors.grey[100]} sx={{ ml: "5px" }}></Typography>
				</Box>
			)
		}
	}]

	return (
		<Box>
			<Header title="CONTACTS" subtitle="list of Contacts for Future Reference"></Header>
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
				"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
					color: `${colors.grey[100]} !important`,
					backgroundColor: colors.blueAccent[700]
				},
			}}>
				<DataGrid rows={mockDataContacts} columns={columns} omponents={{ Toolbar: GridToolbar }} />
			</Box>
		</Box>
	)
}

export default Contacts