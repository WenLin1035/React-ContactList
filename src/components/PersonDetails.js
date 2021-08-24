import React from 'react';

const PersonDetails=(props)=>{
    console.log(props.persons)
    return (
        <table border="2">
        <thead>
          <tr><th>Person id</th><th>name</th><th>Designation</th></tr>
        </thead>
        <tbody>
          {props.persons.map((person)=>{
            return(
                <tr>
                  <td>{person.id}</td>
                  <td>{person.name}</td>
                  <td>{person.desg}</td>
                </tr>
            );
          })}
        </tbody>

      </table>
    );
}

export default PersonDetails;