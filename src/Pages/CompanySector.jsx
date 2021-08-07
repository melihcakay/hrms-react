import React, { useState, useEffect } from "react"
import {Checkbox, Dropdown} from 'semantic-ui-react'
import CompanySectorService from '../Services/CompanySectorService'

export default function CompanySector() {

    const [companySectors, setCompanySectors] = useState([])

    useEffect(() => {
        let companySectorService = new CompanySectorService()
        companySectorService
        .getCompanySectors()
        .then((result) => setCompanySectors(result.data.data))

    }, [])

    return (
        <div>
            
            <Dropdown text='Şirketin Sektörü'>
                <Dropdown.Menu>
                {companySectors.map((companySector) => (
             
                    <Dropdown.Item key={companySector.id}>
                   <Checkbox label = {companySector.companySectorName}/>
                   </Dropdown.Item>
                ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
