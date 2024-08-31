import { SignInButton } from "./sign-in-button";
import { checkIsAuthenticated} from "@/lib/auth/checkIsAuthenticated";
import { UserMenu } from "./userMenu";

export default async function NavbarButtonToggle() {    
    const IsAuthenticated = await checkIsAuthenticated();
    return(
        IsAuthenticated ? <UserMenu/>   : <SignInButton/>
    )
}