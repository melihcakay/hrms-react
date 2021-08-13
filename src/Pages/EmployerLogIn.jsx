import React from 'react'
import { Input, Header, Button } from 'semantic-ui-react'

export default function EmployerLogIn() {
    return (
        <div>
        <Header textAlign="center">
        <p><span>Website Adress: </span><Input type="website"/></p>
        <p><span>Email: </span><Input type="email"/></p>
        <p><span>Şifre: </span><Input type="password"/></p>
        <p><span>Telefon Numarası: </span><Input type="number"/></p>
        <Button size="big" positive >Giriş Yap</Button>
        </Header>
        </div>
    )
}
