import React from 'react'
import { Select, Header, Input, Button } from 'semantic-ui-react'

export default function CreateJobAdvertisement() {
    return (
        <div>
        <Header textAlign="center">
        <p><span>Şehir: </span><Select /></p>
        <p><span>Şirketin Sektörü: </span><Select /></p>
        <p><span>Pozisyon Seviyesi: </span><Select /></p>
        <p><span>Departman </span><Select /></p>
        <p><span>Çalışma Şekli: </span><Select /></p>
        <p><span>İş: </span><Select/></p>
        <p><span>Açıklama: </span><Input type="text"/></p>
        <p><span>Azami Ücret: </span><Input type="number"/></p>
        <p><span>Asgari Ücret: </span><Input type="number"/></p>
        <p><span>Açık Pozisyon Sayısı: </span><Input type="number"/></p>
        <p><span>Son Başvuru Tarihi: </span><Input type="date"/></p>
        <Button size="big" positive >Oluştur</Button>
        </Header>
        </div>
    )
}
