import { auth, signOut } from "../../../auth";
import Button from "../../../components/Button";

const SettingsPage = async () => {
  const session = await auth();

  return (
  
  <div>
      
    {JSON.stringify(session)}
  
  <form action={ async ()=> {
    "use server"
    await signOut()
  }}>
    <Button type="submit" className='login-btn'>
      Sign Out
    </Button>
  </form>
  </div> )
};

export default SettingsPage;
