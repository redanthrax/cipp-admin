import React from 'react'
import { useSelector } from 'react-redux'
import { CCard, CCardImage, CCardTitle, CCardBody, CListGroup, CListGroupItem } from '@coreui/react'
import avatar0 from './../../assets/images/avatars/0.jpg'

const ViewProfile = () => {
  const profile = useSelector((state) => state.profile)
  console.log(profile)
  return (
    <CCard style={{ width: '30rem' }}>
      <CCardImage orientation="top" src={avatar0} />
      <CCardBody>
        <CCardTitle>Identity: {profile.clientPrincipal.userDetails}</CCardTitle>
      </CCardBody>
      <CListGroup flush>
        <CListGroupItem>
          Identity Provider: {profile.clientPrincipal.identityProvider}
        </CListGroupItem>
        <CListGroupItem>User ID: {profile.clientPrincipal.userId}</CListGroupItem>
        <CListGroupItem>
          Roles ({profile.clientPrincipal.userRoles.length})
          <ul>
            {profile.clientPrincipal.userRoles.map((r, index) => (
              <li key={index}>{r}</li>
            ))}
          </ul>
        </CListGroupItem>
      </CListGroup>
    </CCard>
  )
}

export default ViewProfile
