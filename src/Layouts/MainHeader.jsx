import React from 'react'
import {Button, Icon, Segment, Header} from 'semantic-ui-react'

export default function MainHeader() {
    return (
        <div>
            <Segment placeholder>
            
            <Header icon size="large">
            <Icon name='address book' />
            Kolayca ücretsiz ilan ver, hızla gelecek
            başvurulardan yeni elemanını seç! 
            </Header>
            <Button primary>İş İlanı Oluştur</Button>

        </Segment>
        </div>
    )
}
