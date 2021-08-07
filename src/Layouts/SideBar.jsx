import React from 'react'
import { Button, Menu} from 'semantic-ui-react'
import City from '../Pages/City'
import CompanySector from '../Pages/CompanySector'
import Department from '../Pages/Department'
import EmploymentType from '../Pages/EmploymentType'
import PositionLevel from '../Pages/PositionLevel'
import './Sidebar.css';



export default function SideBar() {
    return (
        <div>
            <Menu vertical>
                <Menu.Item>
                    <City/>
                </Menu.Item>
                <Menu.Item>
                    
                   
                    <CompanySector/>
                </Menu.Item>
                <Menu.Item>
                   
                    <Department/>
                </Menu.Item>
                <Menu.Item>
                    
                    <EmploymentType/>
                </Menu.Item>
                <Menu.Item>
                    <PositionLevel/>
                </Menu.Item>
                <Menu.Item id='searchbutton'>
                    <Button negative >Uygula</Button>
                </Menu.Item>
            </Menu>
                    
 
        </div>
    )
}
