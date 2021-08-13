import React from 'react'
import {Segment, Header, Icon, Button} from 'semantic-ui-react'
import { routes } from '../Pages/Routes';

export default function Banner() {

    const {createCV} = routes;

    return (
        <div>
            
            <Segment placeholder>
                <Header icon size="large">
                <Icon name='address card' />
                Online olarak oluşturduğunuz özgeçmiş ile sitemizdeki iş ilanlarına başvuru yapın. 
                </Header>
                <Button primary href={createCV.path}>{createCV.title}</Button>
            </Segment>
        </div>
    )
}
