import {
	Flex,
	Text,
	Divider,
	IconButton,
	Box,
	CloseButton,
	useColorModeValue,
	Drawer,
	DrawerContent,
	useDisclosure,
	HStack,
	MenuButton,
	Menu,
	VStack,
	Avatar,
	Image,
	Link,
	MenuItem,
	MenuList,
} from "@chakra-ui/react";

import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

//non lib imports
import NavItem from "components/globals/sidebar/NavItem";
import items from "./sidebarItems";
import { FiBell, FiMenu } from "react-icons/fi";
// import { useGetCurrUserInfo } from 'api/auth/authHooks';
import support from "assets/sidebarIcons/support.svg";
import logoutSvg from "assets/sidebarIcons/logout.svg";
import diboloImg from "assets/globals/diboloImg.svg";

import { useTranslation } from "react-i18next";
import { useGetCurrUserInfo, useUpdateUser } from "api/profile/profileHooks";
import { logout } from "redux/slices/userAuthSlice";
import { CustomSelect } from "components/formComponents/MenuField";
import { useForm } from "react-hook-form";
import { useEffect, useMemo } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { useGetCountries } from "api/misc/miscHooks";

export default function Sidebar({ children }) {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Box minH="100vh" bg={"gray.100"}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: "none", md: "block" }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
			>
				<DrawerContent display={{ base: "block", md: "none" }}>
					<SidebarContent onClose={onClose} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav onOpen={onOpen} />
			<Box ml={{ base: 0, md: "max(18.5%, 17rem)" }} p={["1", "2", "4"]}>
				{children}
			</Box>
		</Box>
	);
}

const SidebarContent = ({ onClose, ...rest }) => {
	/** hooks */
	const queryClient = useQueryClient();
	const navigate = useNavigate();
	const { t } = useTranslation();

	//handlers
	const handleLogout = () => {
		localStorage.clear();
		queryClient.invalidateQueries();
		navigate("/", { replace: true });
	};

	//jsx
	return (
		<Box
			bg={"white"}
			borderRight="1px"
			borderRightColor={"gray.200"}
			w={{ base: "full", md: "18%" }}
			minW={"16rem"}
			pos="fixed"
			h="full"
			mr={3}
			// px={3}
			{...rest}
		>
			<Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
				<Box>
					<Image src={diboloImg} />
				</Box>
				<CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
			</Flex>

			{items.map((item, i) => (
				<NavItem key={i} {...item} />
			))}
			<Flex flexDir="column" w="100%" alignItems={"flex-start"}>
				<Divider display={"flex"} />
			</Flex>
			<Box display={"flex"} flexDir="column">
				<Box padding={2}>
					<Flex justify={"flex-start"} width="100%">
						<Image src={support} />
						<Text
							ml={5}
							fontSize="sm"
							display={"flex"}
							justifyContent="center"
							flexDir={"column"}
						>
							{t("Sidebar.Support")}
						</Text>
					</Flex>
				</Box>
				<Box padding={2} onClick={handleLogout} cursor="pointer">
					<Flex justify={"flex-start"}>
						<Image src={logoutSvg} />
						<Text
							ml={5}
							fontSize="sm"
							display={"flex"}
							justifyContent="center"
							flexDir={"column"}
						>
							{t("Sidebar.Logout")}
						</Text>
					</Flex>
				</Box>
			</Box>
		</Box>
	);
};

const MobileNav = ({ onOpen, ...rest }) => {
	const navigate = useNavigate();
	const { userInfo } = useGetCurrUserInfo();
	const { t } = useTranslation();
	const { countries } = useGetCountries();
	const { mutate } = useUpdateUser();
	const {
		control,
		reset,
		watch,
		formState: { errors },
		// handleSubmit
	} = useForm({
		defaultValues: useMemo(() => {
			return userInfo;
		}, [userInfo]),
	});

	//useEffects
	useEffect(() => {
		reset(userInfo);
	}, [userInfo?.country.value]);

	useEffect(() => {
		mutate({ country: watch("country")?.value });
	}, [watch("country")]);

	//jsx
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			bg={useColorModeValue("white", "gray.900")}
			borderBottomWidth="1px"
			borderBottomColor={useColorModeValue("gray.200", "gray.700")}
			justifyContent={{ base: "space-between", md: "flex-end" }}
			{...rest}
		>
			<IconButton
				display={{ base: "flex", md: "none" }}
				onClick={onOpen}
				variant="outline"
				aria-label="open menu"
				icon={<FiMenu />}
				mr="3"
			/>

			<Image src={diboloImg} display={{ base: "flex", md: "none" }} />
			<Box
				display={["flex"]}
				justifyContent="space-evenly"
				width={["60%", "60%", "60%", "100%", "60%"]}
			>
				<Link
					display={["none", "none", "none", "none", "flex"]}
					justifyContent="center"
					flexDir={"column"}
					_hover={{ color: "brand.blue" }}
					onClick={() => navigate("/")}
				>
					{t("Sidebar.Home")}
				</Link>
				<Link
					display={["none", "none", "none", "none", "flex"]}
					justifyContent="center"
					flexDir={"column"}
					_hover={{ color: "brand.blue" }}
				>
					{t("Sidebar.AboutUs")}
				</Link>
				<Link
					display={["none", "none", "none", "none", "flex"]}
					justifyContent="center"
					flexDir={"column"}
					_hover={{ color: "brand.blue" }}
				>
					{t("Sidebar.Support")}
				</Link>
				<Link
					display={["none", "none", "none", "none", "flex"]}
					justifyContent="center"
					flexDir={"column"}
					_hover={{ color: "brand.blue" }}
				>
					{t("Sidebar.Faq")}
				</Link>
				<Link
					display={["none", "none", "none", "none", "flex"]}
					justifyContent="center"
					flexDir={"column"}
					_hover={{ color: "brand.blue" }}
				>
					{t("Sidebar.FeesAndLimits")}
				</Link>
				<Box width={["30%"]} display={["none", "none", "none", "none", "flex"]}>
					<CustomSelect
						// leftIcon={businessTypeIcon}
						control={control}
						options={countries}
						name="country"
						placeholder={t("Profile.Country")}
						error={errors.country}
						rules={{
							required: `Required`,
						}}
					/>
				</Box>
			</Box>

			<HStack spacing={{ base: "0", md: "6" }}>
				<IconButton
					boxShadow={"none"}
					size="lg"
					variant="ghost"
					aria-label="open menu"
					icon={<FiBell />}
				/>
				<Flex alignItems={"center"}>
					<Menu>
						<MenuButton
							py={2}
							transition="all 0.3s"
							_focus={{ boxShadow: "none" }}
							onClick={() => navigate("profile")}
						>
							<HStack>
								<VStack
									display={{ base: "none", md: "flex" }}
									alignItems="flex-start"
									spacing="1px"
									ml="2"
								>
									<Text fontSize="sm" fontWeight={"bold"}>
										{t("Sidebar.Hi")} {userInfo?.firstName}
									</Text>
									<Box display={"flex"}>
										<Text fontSize="0.6rem" color="gray.600">
											{userInfo?.email}
										</Text>
									</Box>
								</VStack>
								<Avatar size={"sm"} src={userInfo?.profilePicture} />
							</HStack>
						</MenuButton>
					</Menu>

					<Menu closeOnSelect={false}>
						<MenuButton
							as={IconButton}
							aria-label="Options"
							icon={<AiOutlineDown />}
							variant="outline"
							display={["flex", "flex", "flex", "flex", "none"]}
							bg="transparent"
							border={"none"}
							_hover={{
								bd: "none",
							}}
							_active={{
								bd: "none",
							}}
						/>
						<MenuList>
							<MenuItem>
								<Link
									display={"flex"}
									justifyContent="center"
									flexDir={"column"}
									_hover={{ color: "brand.blue" }}
								>
									{t("Sidebar.Home")}
								</Link>
							</MenuItem>
							<MenuItem>
								<Link
									display={"flex"}
									justifyContent="center"
									flexDir={"column"}
									_hover={{ color: "brand.blue" }}
								>
									{t("Sidebar.AboutUs")}
								</Link>
							</MenuItem>
							<MenuItem>
								<Link
									display={"flex"}
									justifyContent="center"
									flexDir={"column"}
									_hover={{ color: "brand.blue" }}
								>
									{t("Sidebar.Support")}
								</Link>
							</MenuItem>
							<MenuItem>
								<Link
									display={"flex"}
									justifyContent="center"
									flexDir={"column"}
									_hover={{ color: "brand.blue" }}
								>
									{t("Sidebar.Faq")}
								</Link>
							</MenuItem>
							<MenuItem>
								<Link
									display={"flex"}
									justifyContent="center"
									flexDir={"column"}
									_hover={{ color: "brand.blue" }}
								>
									{t("Sidebar.FeesAndLimits")}
								</Link>
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};
