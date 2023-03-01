//assest 
import tools from '../../assets/icons/tools.png'
import noTools from '../../assets/icons/noTools.png'

// types
import { Profile } from '../../types/models'
import { RatingManagerFormData } from '../../types/forms'
import React from 'react';

interface RatingManagerProps {
  profile: Profile;
  handleRating: (FormData: RatingManagerFormData) => void;
}

const RatingManager = (props: RatingManagerProps): JSX.Element => {
  const { profile, handleRating } = props
  const ratingCount = profile.ratingsReceived.length
  let ratingSum = 0

  profile.ratingsReceived.forEach(rating => ratingSum += rating.value)

  const profileRanking = ratingCount ? ratingSum / ratingCount : 1
  
  const ratingOptions: [1, 2, 3, 4, 5] = [1, 2, 3, 4, 5]

  const handleClick = (evt: React.MouseEvent<HTMLImageElement>): void => {
    const newValue = parseInt(evt.currentTarget.id)
    handleRating({ value: newValue, profileId: profile.id })
  }

  return (
    <section>
      {ratingOptions.map((ranking: number): JSX.Element => (
        <img 
          key={ranking}
          id={ranking.toString()}
          src={ranking <= profileRanking ? tools : noTools}
          alt="Tools Symbol"
          onClick={handleClick}
        />  
      ))}
    </section>
  );
}

export default RatingManager;