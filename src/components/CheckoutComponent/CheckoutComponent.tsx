import {
	Box,
	Breadcrumbs,
	Container,
	Grid,
	Typography,
	colors,
	TextField,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Button,
	useTheme,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";
import Image from "next/image";
import cartStore from "@stores/cart.store";

const myLoader = ({ src, width, quality }: any) => {
	return `${src}?q=${quality || 75}`;
};

const CheckoutComponent = () => {
	const cartData = cartStore((store) => store.cart);

	const [addressType, setAddressType] = React.useState("");

	const handleChangeAddress = (event: SelectChangeEvent) => {
		setAddressType(event.target.value as string);
	};
	const [country, setCountry] = React.useState("");

	const handleChangeCountry = (event: SelectChangeEvent) => {
		setCountry(event.target.value as string);
	};
	const router = useRouter();

	const theme = useTheme();

	return (
		<Box>
			<Container maxWidth={"lg"}>
				<Breadcrumbs aria-label="breadcrumb" sx={{ py: 2 }}>
					<Link href="/" legacyBehavior>
						<a style={{ textDecoration: "none" }}>Home</a>
					</Link>
					<Link href="/product" legacyBehavior>
						<a style={{ textDecoration: "none" }}>Product</a>
					</Link>
					<Typography color="text.primary">Product Detail</Typography>
					<Typography color="text.primary">Payment</Typography>
				</Breadcrumbs>
				<Grid container spacing={3} sx={{ pb: 2 }}>
					<Grid item xs={12} md={6}>
						<Typography
							sx={{ color: colors.blue[500], fontWeight: 500, pb: 2 }}
						>
							Shopping Information
						</Typography>
						<Box sx={{ border: `1px solid ${colors.grey[300]}`, p: 2 }}>
							<Grid container spacing={4}>
								<Grid item xs={6}>
									<TextField
										id="outlined-basic"
										label="Full Name"
										variant="outlined"
										fullWidth
										size="small"
									/>
								</Grid>
								<Grid item xs={6}>
									<TextField
										id="outlined-basic"
										label="Email Address"
										variant="outlined"
										fullWidth
										size="small"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										id="outlined-basic"
										label="Phone Number"
										variant="outlined"
										fullWidth
										size="small"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										id="outlined-basic"
										label="Billing Address"
										variant="outlined"
										fullWidth
										size="small"
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										id="outlined-basic"
										label="City"
										variant="outlined"
										fullWidth
										size="small"
									/>
								</Grid>
								<Grid item xs={4}>
									<TextField
										id="outlined-basic"
										label="Region"
										variant="outlined"
										fullWidth
										size="small"
									/>
								</Grid>
								<Grid item xs={4}>
									<FormControl fullWidth size="small">
										<InputLabel id="demo-simple-select-label">
											Address Type
										</InputLabel>
										<Select
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											value={addressType}
											label="Age"
											onChange={handleChangeAddress}
										>
											<MenuItem value={10}>Work</MenuItem>
											<MenuItem value={20}>Home</MenuItem>
											<MenuItem value={30}>Address 1</MenuItem>
											<MenuItem value={30}>Address 2</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={6}>
									<FormControl fullWidth size="small">
										<InputLabel id="demo-simple-select-label-country">
											Country
										</InputLabel>
										<Select
											labelId="demo-simple-select-label-country"
											id="demo-simple-select-country"
											value={country}
											label="Age"
											onChange={handleChangeCountry}
										>
											<MenuItem value={10}>Myanmar</MenuItem>
											<MenuItem value={20}>Singapore</MenuItem>
											<MenuItem value={30}>Japan</MenuItem>
										</Select>
									</FormControl>
								</Grid>
							</Grid>
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								py: 2,
							}}
						>
							<Button variant="outlined" onClick={() => router.back()}>
								Back
							</Button>
							<Button
								sx={{
									boxShadow: "0px",
									backgroundColor: colors.blue[500],
									color: "#fff",
									"&:hover": {
										backgroundColor: colors.blue[700],
									},
								}}
							>
								Continue
							</Button>
						</Box>
					</Grid>
					<Grid item xs={12} md={6}>
						<Typography
							sx={{ color: colors.blue[500], fontWeight: 500, pb: 2 }}
						>
							Choose a payment method
						</Typography>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								<Box
									sx={{
										border: `1px solid ${colors.grey[300]}`,
										py: 1,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
										flexDirection: "column",
										borderRadius: "4px",
										boxShadow: `1px 1px 1px ${colors.blue[100]}`,
									}}
								>
									<Box
										sx={{
											position: "relative",
											width: "80px",
											height: "80px",
										}}
									>
										<Image
											src={"/bank.gif"}
											alt="Bank Gif"
											loader={myLoader}
											fill
											sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
										/>
									</Box>
									<Typography sx={{ color: colors.blue[500] }}>
										Bank Account
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={4}>
								<Box
									sx={{
										border: `1px solid ${colors.grey[300]}`,
										py: 1,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
										flexDirection: "column",
										borderRadius: "4px",
										boxShadow: `1px 1px 1px ${colors.blue[100]}`,
									}}
								>
									<Box
										sx={{
											position: "relative",
											width: "80px",
											height: "80px",
										}}
									>
										<Image
											src={"/pickup.gif"}
											alt="Pickup Gif"
											loader={myLoader}
											fill
											sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
										/>
									</Box>
									<Typography sx={{ color: colors.blue[500] }}>
										Pickup By Myself
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={4}>
								<Box
									sx={{
										border: `1px solid ${colors.grey[300]}`,
										py: 1,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
										flexDirection: "column",
										borderRadius: "4px",
										boxShadow: `1px 1px 1px ${colors.blue[100]}`,
									}}
								>
									<Box
										sx={{
											position: "relative",
											width: "80px",
											height: "80px",
										}}
									>
										<Image
											src={"/cod.gif"}
											alt="Cod Gif"
											loader={myLoader}
											fill
											sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
										/>
									</Box>
									<Typography sx={{ color: colors.blue[500] }}>
										Cash On Delivery(COD)
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={4}>
								<Box
									sx={{
										border: `1px solid ${colors.grey[300]}`,
										py: 1,
										display: "flex",
										justifyContent: "center",
										alignItems: "center",
										width: "100%",
										flexDirection: "column",
										borderRadius: "4px",
										boxShadow: `1px 1px 1px ${colors.blue[100]}`,
									}}
								>
									<Box
										sx={{
											position: "relative",
											width: "80px",
											height: "80px",
										}}
									>
										<Image
											src={"/2c2p.png"}
											alt="2c2p Gif"
											loader={myLoader}
											fill
											sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
										/>
									</Box>
									<Typography sx={{ color: colors.blue[500] }}>2C2P</Typography>
								</Box>
							</Grid>
						</Grid>
						<Typography
							sx={{ color: colors.blue[500], fontWeight: 500, py: 2 }}
						>
							Order Summary
						</Typography>
						<TableContainer>
							<Table aria-label="simple table">
								<TableBody>
									{cartData?.cart_item.map((cart, index) => {
										return (
											<TableRow
												key={index}
												sx={{
													"&:last-child td, &:last-child th": {
														border: 0,
														borderBottom: `1px solid ${colors.grey[300]}`,
													},
												}}
											>
												<TableCell component="th" scope="row">
													{(index = index + 1)}
												</TableCell>
												<TableCell>{cart.product[0].name}</TableCell>
												<TableCell>
													{new Intl.NumberFormat("mm-MM", {
														style: "currency",
														currency: "MMK",
														currencyDisplay: "code",
													}).format(
														cart.product[0].discount.length > 0
															? cart.product[0].discount[0].promo_price
															: cart.product[0].price
													)}
												</TableCell>
												<TableCell>{cart.qty}</TableCell>
											</TableRow>
										);
									})}
								</TableBody>
							</Table>
						</TableContainer>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								py: 2,
								px: 1,
							}}
						>
							<Typography sx={{ fontSize: 14, fontWeight: 500 }}>
								Subtotal:{" "}
							</Typography>
							{cartData ? (
								<Typography sx={{ fontSize: 14 }}>
									{new Intl.NumberFormat("mm-MM", {
										style: "currency",
										currency: "MMK",
										currencyDisplay: "code",
									}).format(cartData.subtotal)}
								</Typography>
							) : (
								<Typography></Typography>
							)}
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								py: 2,
								backgroundColor: colors.grey[100],
								alignItems: "center",
								px: 1,
							}}
						>
							<Typography sx={{ fontSize: 14, fontWeight: 500 }}>
								Standard Delivery:{" "}
							</Typography>
							<Typography sx={{ fontSize: 14 }}>0 Ks </Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								py: 2,
								alignItems: "center",
								px: 1,
							}}
						>
							<Typography sx={{ fontWeight: 500, fontSize: 18 }}>
								Total:{" "}
							</Typography>
							<Typography sx={{ fontWeight: 500, fontSize: 18 }}>
								{cartData ? (
									<Typography sx={{ fontSize: 14 }}>
										{new Intl.NumberFormat("mm-MM", {
											style: "currency",
											currency: "MMK",
											currencyDisplay: "code",
										}).format(cartData.subtotal)}
									</Typography>
								) : (
									<Typography></Typography>
								)}
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								gap: 2,
								color: colors.blue[500],
								marginTop: theme.spacing(3),
							}}
						>
							<ArrowBackIcon />
							<Link href={"/product"} legacyBehavior>
								<a
									style={{
										textDecoration: "none",
										fontWeight: 500,
										color: colors.blue[500],
									}}
								>
									Continue Shopping
								</a>
							</Link>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};

export default CheckoutComponent;
