import React from 'react';

function List({ employees, handleDetail, handleDelete }) {
    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        
                        <th>Name</th>
                       
                        <th>Id</th>
                       
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
           
                 {employees.length > 0 ? (employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td className="text-right">
                        <button onClick={() => handleDetail(employee.id)} className="button muted-button">Details</button>
                        </td>
                        <td className="text-left">
                        <button onClick={() => handleDelete(employee.id)}  className="button muted-button">Delete</button>
                        </td>
                        </tr>
                ))
            ) : (
            <tr>
                <td colSpan={7}>No Employees</td>
            </tr>
            )}
          </tbody>
          </table>
        </div>
    )
}

export default List;
