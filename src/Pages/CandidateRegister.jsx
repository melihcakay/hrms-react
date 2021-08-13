import React from 'react'
import { Input, Header, Button } from 'semantic-ui-react'


export default function CandidateRegister() {
    return (
        <div>
        <Header textAlign="center">
        <p><span>TC Kimik Numarası: </span><Input type="number"/></p>
        <p><span>İsim: </span><Input type="text"/></p>
        <p><span>Soyisim: </span><Input type="text"/></p>
        <p><span>Email: </span><Input type="email"/></p>
        <p><span>Email Tekrar: </span><Input type="email"/></p>
        <p><span>Şifre: </span><Input type="password"/></p>
        <p><span>Şifre Tekrar: </span><Input type="password"/></p>
        <p><span>Doğum Tarihi: </span><Input type="date"/></p>
        <Button size="big" positive >Kayıt Ol</Button>
        </Header>
        </div>
    )
}
