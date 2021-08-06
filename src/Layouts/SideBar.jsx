import React from 'react'
import { Header, Menu} from 'semantic-ui-react'
import City from '../Pages/City'
import CompanySector from '../Pages/CompanySector'
import Department from '../Pages/Department'
import EmploymentType from '../Pages/EmploymentType'
import PositionLevel from '../Pages/PositionLevel'



export default function SideBar() {
    return (
        <div>
            <Menu vertical>
                <Menu.Item>
                    <Header>Şehirler</Header>
                    <City/>
                </Menu.Item>
                <Menu.Item>
                    
                    <Header>Şirketin Sektörü</Header>
                    
                    <CompanySector/>
                </Menu.Item>
                <Menu.Item>
                    <Header>Departman</Header>
                    <Department/>
                </Menu.Item>
                <Menu.Item>
                    <Header>Çalışma Şekli</Header>
                    <EmploymentType/>
                </Menu.Item>
                <Menu.Item>
                    <Header>Pozisyon Seviyesi</Header>
                    <PositionLevel/>
                </Menu.Item>
            </Menu>
                    
 
        </div>
    )
}
