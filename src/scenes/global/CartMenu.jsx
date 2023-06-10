import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "@emotion/styled";
import { shades } from "../../theme/theme";
import { setIsCartOpen, decreaseCount, increaseCount, removeFromCart} from "../../state";
import { useNavigate } from "react-router-dom";

const FlexBox = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
    const isCartOpen = useSelector(state => state.cart.isCartOpen);

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price;
    }, 0);

    return (
        <Box
        display={isCartOpen ? "block" : "none"}
        position="fixed"
        backgroundColor="rgba(0,0,0,0.5)"
        position= "fixed"
        left = "0"
        overflow="auto"
        top="0"
        width="100%"
        height="100%"
        zIndex={10}
        >
            <Box
            width="80%"
            right="0"
            margin="auto"
            width = "max(400px, 30%)"
            height="100%"
            backgroundColor="white"
            position="fixed"
            >
                <Box padding= "30px" overflow="auto" height="100%">
                    <Typography variant="h3" sx={{ fontWeight: 600 }}> Cart ({cart.length})</Typography>

                </Box>
            </Box>

}
