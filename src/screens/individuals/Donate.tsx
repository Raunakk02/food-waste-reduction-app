import { Box } from "@chakra-ui/react";
import FoodDonationForm from "../../components/donate/FoodDonationForm";

function Donate() {

    return (
        <Box 
            backgroundImage="
                linear-gradient(
                    rgba(0, 0, 0, 0.8), 
                    rgba(0, 0, 0, 0.8)
                ), 
                url('https://static.vecteezy.com/system/resources/previews/018/991/608/original/set-of-vegetables-fruits-drinks-and-snacks-for-food-donation-vector.jpg')
            "
            // filter="blur(8px)"
            // -webkit-filter: blur(8px)
            width="100%"
            display="flex"
            justifyContent="center"
        >
            <FoodDonationForm />
        </Box>
    );
}

export default Donate;