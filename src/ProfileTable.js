import React from 'react';
import { Table } from 'reactstrap'

const ProfileTable =(props) => {
    console.log(props)
    return (
        <div>
          <Table borderless className="ml=3 table-repsonsive">
        <thead>
          <tr>
            <th>#</th>
            <th>Details</th>
            <th>
            <img src={props.username1.avatar_url} alt="..." class="rounded-circle" style={{height:"70px"}}/>
            {props.username1.name}
          
            </th>
            <th> <img src={props.username2.avatar_url} alt="..." class="rounded-circle" style={{height:"70px"}}/>{props.username2.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bio</td>
            <td>{props.username1.bio}</td>
            <td>{props.username2.bio}</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Location</td>
            <td>{props.username1.location}</td>
            <td>{props.username2.location}</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Public Repositories</td>
            <td>{props.username1.public_repos}</td>
            <td>{props.username2.public_repos}</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>No. of followers</td>
            <td>{props.username1.followers}</td>
            <td>{props.username2.followers}</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>No. of following</td>
            <td>{props.username1.following}</td>
            <td>{props.username2.following}</td>
          </tr>

        </tbody>
      </Table>
        </div>
    )
}

export default ProfileTable