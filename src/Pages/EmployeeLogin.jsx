import React from 'react'
import { Input, Header, Button} from 'semantic-ui-react'

export default function EmployeeLogin() {
    return (
        <div>
        <Header textAlign="center">
        <p><span>Email: </span><Input type="email"/></p>
        <p><span>Şifre: </span><Input type="email"/></p>
            
       
        <Button size="big" positive >Giriş Yap</Button>
        </Header>
        </div>
    )
}
