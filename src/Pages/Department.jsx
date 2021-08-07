import React, { useState, useEffect } from "react"
import DepartmentService from "../Services/DepartmentService"
import { Table, Checkbox, Dropdown} from 'semantic-ui-react'

export default function Department() {

    const [departments,setDepartments] = useState([])

    useEffect(() => {
        let departmentService = new DepartmentService()
        departmentService
        .getDepartments()
        .then((result) => setDepartments(result.data.data))
    }, [])




    return (
        <div>
                <Dropdown text='Departman'>
                <Dropdown.Menu>
                {departments.map((department) => (
                <Dropdown.Item key={department.id}>
                    
                    <Checkbox label = {department.department}/>
                </Dropdown.Item>
                ))}
                </Dropdown.Menu>
                </Dropdown>
        </div>
    )
}
