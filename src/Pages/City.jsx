import React, { useState, useEffect } from "react"
import CitiesService from "../Services/CitiesService"
import { Table, Checkbox} from 'semantic-ui-react'

export default function City() {

    

    const [cities, setCities] = useState([])

    useEffect(() => {
        let citiesService = new CitiesService()
        citiesService
        .getCities()
        .then((result) => setCities(result.data.data))

    }, [])

   

    return (
        <div>
            <Table>
                {cities.map((city) => (
                <Table.Row key={city.id}>
                    
                    <Table.Cell><Checkbox label = {city.cityName}/></Table.Cell>
                </Table.Row>
                ))}
            </Table>
        
        </div>
    )   
}

