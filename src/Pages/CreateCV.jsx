import React from 'react'
import { Input, Header, Button, Select } from 'semantic-ui-react'

export default function CreateCV() {
    return (
        <div>
        <Header textAlign="center">
        <p><span>Github Link: </span><Input type="text"/></p>
        <p><span>LinkedIn Link: </span><Input type="text"/></p>
        <p><span>Ön Yazı: </span><Input type="text" /></p>
        <p><span>Okul: </span><Select /></p>
        <p><span>Deneyim: </span><Select /></p>
        <p><span>Diller: </span><Select/></p>
        <p><span>Teknolojiler: </span><Select/></p>
        <p><span>Fotoğraf: </span><Input type="number"/></p>
        <Button size="big" positive >Oluştur</Button>
        </Header>
        </div>
    )
}
