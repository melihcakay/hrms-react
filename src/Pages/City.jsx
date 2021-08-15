import React, { useState, useEffect } from "react"
import CitiesService from "../Services/CitiesService"
import {Dropdown, Checkbox} from 'semantic-ui-react'

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
            
            <Dropdown text='Şehirler'>
            
                <Dropdown.Menu>
                
                {cities.map((city) => (
                    <Dropdown.Item key={city.id} ><Checkbox label = {city.cityName}/></Dropdown.Item>
                    ))}
              </Dropdown.Menu>
              </Dropdown>
        </div>
    )   
}

