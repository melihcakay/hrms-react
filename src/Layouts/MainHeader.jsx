import React from 'react'
import {Button, Icon, Segment, Header} from 'semantic-ui-react'
import { routes } from '../Pages/Routes';

export default function MainHeader() {

    const {createJobAdvertisement} = routes;

    return (
        <div>
            <Segment placeholder>
            
            <Header icon size="large">
            <Icon name='address book' />
            Kolayca ücretsiz ilan ver, hızla gelecek
            başvurulardan yeni elemanını seç! 
            </Header>
            <Button primary href={createJobAdvertisement.path}>{createJobAdvertisement.title}</Button>

        </Segment>
        </div>
    )
}
