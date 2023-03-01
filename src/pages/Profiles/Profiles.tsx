// types
import { Profile } from '../../types/models'
import { RatingManagerFormData } from '../../types/forms'

// components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

interface ProfilesProps {
  profiles: Profile[];
  handleRating: (formData: RatingManagerFormData) => void;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles } = props

  if(!profiles.length) return <p>No Vendor profiles yet</p>

  return (
    <main className='list'>
      {profiles.map((profile: Profile) =>
        <ProfileCard profile={profile} key={profile.id} handleRating={props.handleRating}/>
      )}
    </main>
  )
}
 
export default Profiles
