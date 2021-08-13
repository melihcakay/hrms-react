import React from 'react'
import { Input, Header, Button } from 'semantic-ui-react'

export default function EmployerRegister() {
    return (
        <div>
        <Header textAlign="center">
        <p><span>Şirket İsmi: </span><Input type="text"/></p>
        <p><span>Website Adresi: </span><Input type="website"/></p>
        <p><span>Telefon Numarası: </span><Input type="number"/></p>
        <p><span>Email: </span><Input type="email"/></p>
        <p><span>Email Tekrar: </span><Input type="email"/></p>
        <p><span>Şifre: </span><Input type="password"/></p>
        <p><span>Şifre Tekrar: </span><Input type="password"/></p>
        <Button size="big" positive >Kayıt Ol</Button>
        </Header>
        </div>
    )
}
