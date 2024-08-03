import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import Details from './Details';
import { getEmployees, addEmployee, updateEmployee, deleteEmployee } from '../services/apiService';

function Dashboard() {
    const [employees, setEmployees] = useState([]);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [view, setView] = useState(false);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await getEmployees();
                setEmployees(data);
            } catch (error) {
                console.error('Error fetching employees:', error);
            }
        };

        fetchEmployees();
    }, []);

    const handleAdd = async (employee) => {
        try {
            const newEmployee = await addEmployee(employee);
            setEmployees([...employees, newEmployee]);
            setIsAdding(false);
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    const handleUpdate = async (id, updatedEmployee) => {
        try {
            const updated = await updateEmployee(id, updatedEmployee);
            setEmployees(employees.map((employee) => (employee.id === id ? updated : employee)));
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating employee:', error);
        }
    };

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(async (result) => {
            if (result.value) {
                try {
                    await deleteEmployee(id);
                    setEmployees(employees.filter((employee) => employee.id !== id));
                    Swal.fire({
                        icon: 'success',
                        title: 'Deleted!',
                        text: `Employee has been deleted.`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } catch (error) {
                    console.error('Error deleting employee:', error);
                }
            }
        });
    };

    const handleDetail = (id) => {
        const [employee] = employees.filter((employee) => employee.id === id);
        setSelectedEmployee(employee);
        setView(true);
    };

    return (
        <div className='container'>
            {!isAdding && !isEditing && !view && (
                <>
                    <Header setIsAdding={setIsAdding} />
                    <List employees={employees} handleDetail={handleDetail} handleDelete={handleDelete} />
                </>
            )}
            {isAdding && <Add handleAdd={handleAdd} setIsAdding={setIsAdding} />}
            {isEditing && <Edit selectedEmployee={selectedEmployee} handleUpdate={handleUpdate} setIsEditing={setIsEditing} />}
            {view && <Details employee={selectedEmployee} setView={setView} />}
        </div>
    );
}

export default Dashboard;
