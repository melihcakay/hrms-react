import React from 'react'
import {Segment, Header, Icon, Button} from 'semantic-ui-react'

export default function Banner() {
    return (
        <div>
            
            <Segment placeholder>
                <Header icon size="large">
                <Icon name='address card' />
                Online olarak oluşturduğunuz özgeçmiş ile sitemizdeki iş ilanlarına başvuru yapın. 
                </Header>
                <Button primary>Özgeçmiş Oluştur</Button>
            </Segment>
        </div>
    )
}
