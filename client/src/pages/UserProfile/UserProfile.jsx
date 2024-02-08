import React, {useState} from 'react'
import LeftSide from '../../components/LeftSide/LeftSide'
import Avatar from '../../components/Avatar/Avatar'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBirthdayCake, faPen} from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import {EditProfile} from './EditProfile'
import {ProfileBio} from './ProfileBio'
import './UserProfile.css'

export const UserProfile = () => {
    const {id} =useParams()
    const users = useSelector((state)=> state.userReducer)
    const currentProfile = users.filter((user)=> user._id === id)[0]
    const currentUser = useSelector((state)=>state.currentUserReducer)
    // console.log(currentProfile)  
    const [Switch, setSwitch] = useState(false)
  return (
    <div className='home-container-1'>
        <LeftSide />
        <div className='home-container-2'>
            <section>
                <div className='user-details-container'>
                    <div className='user-details'>
                        <Avatar backgroundColor='purple' color='white' fontSize='50px'  textAlign='center' padding={'30px 50px'} borderRadius={'05px'}>
                        {currentProfile?.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <div className='user-name'>
                            <h1>{currentProfile?.name}</h1>
                            <p>
                                <FontAwesomeIcon icon={faBirthdayCake}/> Joined {moment(currentProfile?.joinedOn).fromNow()}
                            </p>
                        </div>

                    </div>
                    {
                        currentUser?.result._id === id && (
                            <button type='button' className='edit-profile-btn'  onClick={() => setSwitch(true)}>
                                <FontAwesomeIcon icon={faPen} /> Edit Profile
                            </button>
                        )
                    }

                </div>
                <>
                {
                    Switch ?(
                        <EditProfile currentUser={currentUser} setSwitch={setSwitch}/>
                    ):(
                        <ProfileBio currentProfile={currentProfile} />
                    )
                }
                </>

            </section>

        </div>
        
    </div>
  )
}
