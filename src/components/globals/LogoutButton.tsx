import { Button } from '@chakra-ui/react'; 
import { signOut } from '@firebase/auth';
import { auth } from '../../firebase_utils';

function LogoutButton(){

    const signout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.     
            console.log("Logout successful");                   
          }).catch((error) => {
            // An error happened.
            console.log(error);            
          });
    }

    return (
        <Button 
            loadingText="Submitting"
            size="lg"
            bg={"blue.400"}
            color={"white"}
            _hover={{
            bg: "blue.500",
            }}
            onClick={signout}
        >
            Logout
        </Button>
    );
}

export default LogoutButton;