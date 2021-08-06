import React, { useState, useEffect } from "react"
import EmploymentTypeService from '../Services/EmploymentTypeService'
import { Table, Checkbox} from 'semantic-ui-react'

export default function EmploymentType() {

    const [employmentTypes,setEmploymentTypes] = useState([])

    useEffect(() => {
        let employmentTypeService = new EmploymentTypeService()
        employmentTypeService
        .getEmploymentTypes()
        .then((result) => setEmploymentTypes(result.data.data))
        
    },[])
    
    

    return (
        <div>
            <Table>
                {employmentTypes.map((employmentType) => (
                <Table.Row key={employmentType.id}>
                    
                    <Table.Cell><Checkbox label = {employmentType.employmentType}/></Table.Cell>
                </Table.Row>
                ))}
            </Table>
        </div>
    )
}
