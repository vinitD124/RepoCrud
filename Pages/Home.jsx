
import { Link } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'
import { useContext, useEffect } from 'react'

export default function Home() {
  

  let {users,getAllUser} = useContext(AppContext)


  useEffect(()=>{
    getAllUser()
  },[getAllUser])




  return (

    <div className='home'>
         <div class="container2">
       <Link to="/form"><button className='btn-add'>Add User</button></Link>
          <table>
              <thead>
                  <tr>
                      <th>name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      {/* <th>Action</th> */}
                  </tr>

                {
                  users.data?.map((data)=>(
                     
                    <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                   
                  </tr>
                  ))
                }
                
              </thead>
              <tbody id="usertables">
                
              
              </tbody>
          </table>
          </div>
     
    </div>
  )
}
