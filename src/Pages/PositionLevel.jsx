import React, { useState, useEffect } from "react"
import PositionLevelService from '../Services/PositionLevelService'
import { Table, Checkbox} from 'semantic-ui-react'

export default function PositionLevel() {

    const[positionLevels,setPositionLevels] = useState([])

    useEffect(() => {
        let positionLevelService = new PositionLevelService()
        positionLevelService
        .getPositionLevels()
        .then((result) => setPositionLevels(result.data.data))
    })



    return (
        <div>
            <Table>
                {positionLevels.map((positionLevel) => (
                <Table.Row key={positionLevel.id}>
                    
                    <Table.Cell><Checkbox label = {positionLevel.positionLevel}/></Table.Cell>
                </Table.Row>
                ))}
            </Table>
        </div>
    )
}
