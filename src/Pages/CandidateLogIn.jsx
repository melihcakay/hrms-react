import React from 'react'
import { Input, Header, Button } from 'semantic-ui-react'

export default function CandidateLogIn() {
    return (
        <div>
        <Header textAlign="center">
        <p><span>TC Kimik Numarası: </span><Input type="number"/></p>
        <p><span>Email: </span><Input type="email"/></p>
        <p><span>Şifre: </span><Input type="password"/></p>
        <p><span>Doğum Tarihi: </span><Input type="date"/></p>
        <Button size="big" positive >Giriş Yap</Button>
        </Header>
        </div>
    )
}
