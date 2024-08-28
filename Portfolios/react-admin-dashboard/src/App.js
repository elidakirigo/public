import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Theme";
import TopBar from "./scenes/global/TopBar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/Dashboard";
import Sidebar from "./scenes/global/Sidebar";
import Team from "./scenes/Team";
import Invoices from "./scenes/Invoices";
import Contacts from "./scenes/Contacts";
import Bar from "./scenes/Bar";
import Form from "./scenes/Form";
import Line from "./scenes/Line";
import Pie from "./scenes/Pie";
import FAQ from "./scenes/Faq";
import Geography from "./scenes/Geography";
import Calendar from "./scenes/Calendar";


function App() {

	const [theme, colorMode] = useMode()

	return (
		<ColorModeContext.Proviver value={colorMode}>
			<ThemeProvider>
				<CssBaseline />
				<div className='app'>
				<Sidebar />
					<main className="content">
						<TopBar />
						{/* set up routing */}
						<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/Team" element={<Team />} />
							<Route path="/contacts" element={<Contacts />} />
							<Route path="/invoices" element={<Invoices />} />
							<Route path="/form" element={<Form />} />
							<Route path="/bar" element={<Bar />} />
							<Route path="/pie" element={<Pie />} />
							<Route path="/line" element={<Line />} />
							<Route path="/faq" element={<FAQ />} />
							<Route path="/geography" element={<Geography />} />
							<Route path="/calendar" element={<Calendar />} />
						</Routes>
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Proviver>
	);
}

export default App; 