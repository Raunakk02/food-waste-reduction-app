import { Outlet, useLocation, Navigate } from "react-router-dom";
import { Flex } from "@chakra-ui/layout";
import Sidebar from "components/globals/sidebar/Sidebar";
import { useToast } from "@chakra-ui/react";
import PageNotFound from "screens/errorPages/PageNotFound";

export const RequireAuth = () => {
	const location = useLocation();

	// if (!user || !hasEnteredPin) {
	//   // Redirect them to the /login page, but save the current location they were
	//   // trying to go to when they were redirected. This allows us to send them
	//   // along to that page after they login, which is a nicer user experience
	//   // than dropping them off on the home page.
	//   return <Navigate to={`/login?path=${location.pathname}`} />;
	// }

	//Checking if error is of 404 category and routing user to that page
	if (location.state?.errorStatusCode === 404 && location.state?.redirect) {
		return <PageNotFound />;
	}

	return (
		<Flex //adding custom scollbar using the css prop
			css={{
				"&::-webkit-scrollbar": {
					width: "4px",
					height: "4px",
				},
				"&::-webkit-scrollbar-track": {
					width: "6px",
				},
				"&::-webkit-scrollbar-thumb": {
					background: "#4586FA",
					borderRadius: "24px",
				},
			}}
			// overflow={'scroll'}
			flexDir={"column"}
			justify="space-around"
		>
			<Sidebar>
				<Flex>
					<Outlet />
				</Flex>
			</Sidebar>
		</Flex>
	);
};

export const RequireAdminPriviledge = () => {
	const toast = useToast();
	// if (user.role !== 4) {
	//   toast({ status: 'warning', title: 'Priviledged Route' });
	//   return <Navigate to={'/'} replace />;
	// }
	return <Outlet />;
};
