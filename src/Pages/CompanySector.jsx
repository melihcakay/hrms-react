import React, { useState, useEffect } from "react"
import { Table, Checkbox} from 'semantic-ui-react'
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
            
            <Table>
                {companySectors.map((companySector) => (
                <Table.Row key={companySectors.id}>
                    
                    <Table.Cell><Checkbox label = {companySector.companySectorName}/></Table.Cell>
                </Table.Row>
                ))}
            </Table>
        </div>
    )
}
