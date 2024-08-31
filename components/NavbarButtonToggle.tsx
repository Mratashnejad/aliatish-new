import { SignInButton } from "./sign-in-button";
import { SignOutButton } from "./sign-out-button";
import { checkIsAuthenticated} from "@/lib/auth/checkIsAuthenticated";


export default async function NavbarButtonToggle() {    
    const IsAuthenticated = await checkIsAuthenticated();
    return(
        IsAuthenticated ? <SignOutButton/> : <SignInButton/> 
    )
}