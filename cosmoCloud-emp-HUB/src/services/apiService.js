const BASE_URL = 'https://free-ap-south-1.cosmocloud.io/development/api/employees/66adb92edcc7e8fe1dcdb974/66adb92edcc7e8fe1dcdb975'; // Replace with your actual Cosmocloud base URL


const headers = {
    'Content-Type': 'application/json',
    'x-project-id': '66adb92edcc7e8fe1dcdb974',
    'x-env-id': '66adb92edcc7e8fe1dcdb975',
};

export const getEmployees = async () => {
    try {
        const response = await fetch(`${BASE_URL}/employees`, { headers });
        if (!response.ok) {
            throw new Error('Error fetching employees');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching employees:', error);
        throw error;
    }
};

export const getEmployeeById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/employees/${id}`, { headers });
        if (!response.ok) {
            throw new Error('Error fetching employee');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching employee:', error);
        throw error;
    }
};

export const addEmployee = async (employeeData) => {
    try {
        const response = await fetch(`${BASE_URL}/employees`, {
            method: 'POST',
            headers,
            body: JSON.stringify(employeeData),
        });
        if (!response.ok) {
            throw new Error('Error adding employee');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding employee:', error);
        throw error;
    }
};

export const updateEmployee = async (id, employeeData) => {
    try {
        const response = await fetch(`${BASE_URL}/employees/${id}`, {
            method: 'PUT',
            headers,
            body: JSON.stringify(employeeData),
        });
        if (!response.ok) {
            throw new Error('Error updating employee');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating employee:', error);
        throw error;
    }
};

export const deleteEmployee = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/employees/${id}`, {
            method: 'DELETE',
            headers,
        });
        if (!response.ok) {
            throw new Error('Error deleting employee');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting employee:', error);
        throw error;
    }
};
