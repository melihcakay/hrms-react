import React from 'react'
import { Input, Button, Header } from 'semantic-ui-react'

export default function CreateJobExperience() {
    return (
        <div>
        <Header textAlign="center">
        <p><span>İş Yeri Adı: </span><Input type="text" /></p>
        <p><span>Pozisyon: </span><Input type="text"/></p>
        <p><span>Başlama Tarihi: </span><Input type="date"/></p>
        <p><span>Bitiş Tarihi: </span><Input type="date"/></p>
        <Button size="big" positive >Oluştur</Button>
        </Header>
        </div>
    )
}
