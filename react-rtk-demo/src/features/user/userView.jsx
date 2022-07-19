import React ,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from './userSlice'


const UserView = () => {

  const user = useSelector((state)=> state.user)
  console.log('user', user)

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  }, [])

  return (
    <div>
        <h2>List of users</h2>
        {user.loading && <div>Loading...</div>}
        { !user.loading && user.error ? <div>Error: {user.error}</div> : null} 
        {!user.loading && user.users.length ? (
          <ul>
              {
                user.users.map((u)=>{
                  return <li key={u.id}>{u.name}</li>
                })
              }
              </ul>
        ): null}
    </div>
  )
}

export default UserView