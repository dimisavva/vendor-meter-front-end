//assets
import tools from '../../assets/icons/tools.png'

// stylesheets
import styles from './Landing.module.css'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'vendor. please log in'}</h1>
      <img src={tools} alt="tools" />
    </main>
  )
}

export default Landing
