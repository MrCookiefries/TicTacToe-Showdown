import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { Box, IconButton } from "@mui/material";

const BoardSpot = ({ coord, val, placeToken }) => {
	const handleClick = () => placeToken(coord);

	return (
		<Box
			onClick={handleClick}
			sx={{ width: "calc(100% / 3)", textAlign: "center", border: 2 }}
		>
			<IconButton sx={{ width: "100%", height: "100%" }}>
				{val ? (
					val === 1 ? (
						<CircleOutlinedIcon fontSize="large" />
					) : (
						<CloseOutlinedIcon fontSize="large" />
					)
				) : (
					<AddOutlinedIcon sx={{ opacity: 0 }} fontSize="large" />
				)}
			</IconButton>
		</Box>
	);
};

export default BoardSpot;
