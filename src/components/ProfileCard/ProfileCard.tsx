// assets
import defaultPic from '../../assets/icons/profile.png'

// types
import { Profile } from '../../types/models'
import { RatingManagerFormData } from '../../types/forms';

// components
import RatingManager from '../RatingManager/RatingManager'

interface ProfileCardProps {
  profile: Profile;
  handleRating: (formData: RatingManagerFormData) => void;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props;

  const profilePic: string = profile.photo ? profile.photo : defaultPic

  return (
    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar`} />
      <h1>{profile.name}</h1>

      <RatingManager {...props}/>

    </article>
  )
}
  
export default ProfileCard;