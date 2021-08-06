import React, { useState, useEffect } from "react"
import DepartmentService from "../Services/DepartmentService"
import { Table, Checkbox} from 'semantic-ui-react'

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
            <Table>
                {departments.map((department) => (
                <Table.Row key={department.id}>
                    
                    <Table.Cell><Checkbox label = {department.department}/></Table.Cell>
                </Table.Row>
                ))}
            </Table>
        </div>
    )
}
