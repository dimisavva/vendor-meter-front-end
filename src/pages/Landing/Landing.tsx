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

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  const handleDeleteAccount = async (): Promise<void> => {

  }
;
  return (
    <main className={styles.container}>
      <h1>hello, <br/>{user ? user.name : 'please log in'}</h1>
      <img src={tools} alt="tools" />
    </main>
  )
}

export default Landing
