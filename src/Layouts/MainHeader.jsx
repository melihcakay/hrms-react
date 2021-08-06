import React from 'react'
import {Button, Icon, Segment, Header} from 'semantic-ui-react'

export default function MainHeader() {
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
