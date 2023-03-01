//assets
import tools from '../../assets/icons/tools.png'

// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

// services
import * as authService from '../../services/authService'

interface LandingProps {
  user: User | null;
  handleLogout: ()=> void;
}

const Landing = ( { user, handleLogout }: LandingProps): JSX.Element => {

  const handleDeleteAccount = async (): Promise<void> => {
    await authService.deleteAccount()
    handleLogout()
  }
;
  return (
    <main className={styles.container}>
      <h1>hello, <br/>{user ? user.name : 'please log in'}</h1>
      <img src={tools} alt="tools" />

      { user &&
        <button onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </button>
      }

    </main>
  )
}

export default Landing
