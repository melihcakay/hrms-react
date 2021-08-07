import React, { useState, useEffect } from "react"
import PositionLevelService from '../Services/PositionLevelService'
import { Dropdown, Checkbox} from 'semantic-ui-react'

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
            <Dropdown text='Pozisyon Seviyesi'>
                <Dropdown.Menu>
                {positionLevels.map((positionLevel) => (
                <Dropdown.Item key={positionLevel.id}>
                    
                    <Checkbox label = {positionLevel.positionLevel}/>
                </Dropdown.Item>
                ))}
                </Dropdown.Menu>
                </Dropdown>
        </div>
    )
}
