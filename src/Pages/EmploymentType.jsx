import React, { useState, useEffect } from "react"
import EmploymentTypeService from '../Services/EmploymentTypeService'
import { Dropdown, Checkbox} from 'semantic-ui-react'

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
            <Dropdown text='Çalışma Şekli'>
                <Dropdown.Menu>
                {employmentTypes.map((employmentType) => (
                <Dropdown.Item key={employmentType.id}>
                    
                    <Checkbox label = {employmentType.employmentType}/>
                </Dropdown.Item>
                ))}
                </Dropdown.Menu>
                </Dropdown>
        </div>
    )
}
