import {
    Box,
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Select,
    Textarea,
    Image,
    Card
} from '@chakra-ui/react';

import { motion } from 'framer-motion';

function FoodDonationForm(){
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        
        <Box p={10} minWidth="500px" width="50vw">
            <Card p={10}>
                <Heading as="h1" mb={8}>
                    Food Donation Form
                </Heading>
                <form onSubmit={handleSubmit}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            src="https://picsum.photos/80/80"
                            alt="Food Donation"
                            mb={8}
                            borderRadius="lg"
                        />
                    </motion.div>
                    <FormControl id="name" isRequired mb={4}>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" placeholder="Enter your name" />
                    </FormControl>
                    <FormControl id="email" isRequired mb={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Enter your email" />
                    </FormControl>
                    <FormControl id="phone" isRequired mb={4}>
                    <FormLabel>Phone</FormLabel>
                    <Input type="tel" placeholder="Enter your phone number" />
                    </FormControl>
                    <FormControl id="foodType" isRequired mb={4}>
                    <FormLabel>Food Type</FormLabel>
                    <Select placeholder="Select food type">
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                        <option value="grains">Grains</option>
                        <option value="dairy">Dairy</option>
                        <option value="meat">Meat</option>
                        <option value="other">Other</option>
                    </Select>
                    </FormControl>
                    <FormControl id="quantity" isRequired mb={4}>
                    <FormLabel>Quantity</FormLabel>
                    <Input type="number" placeholder="Enter quantity" />
                    <FormHelperText>
                        Enter the quantity of food items you want to donate.
                    </FormHelperText>
                    </FormControl>
                    <FormControl id="message" mb={4}>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="Enter additional message (optional)" />
                    </FormControl>
                    <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    >
                    <Button colorScheme="blue" type="submit">
                        Donate
                    </Button>
                    </motion.div>
                </form>
            </Card>
        </Box>
    );
}

export default FoodDonationForm;