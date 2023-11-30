function Employees({ Employee }) {
    return (
        <div>
            <h1>Employee List</h1>

            <ul>
                {/* map through the array of employees and create a list item for each employee */}
                {Employee.map((employee) => (
                    <li key={employee._id}>
                        {employee.empName}  Salary:- {employee.empSalary}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getServerProps() {
    const res = await fetch("http://localhost:3000/api/employee/add")
    const data = await res.json();
    return {
        props: {
            employees: data.Employees
        }
    }
}
export default Employees