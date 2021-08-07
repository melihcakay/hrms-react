import React from 'react'
import {Segment, Image, Container, Grid, Header, Input} from 'semantic-ui-react'
import './Footer.css';


export default function Footer() {
    return (
        <div>
            
            <Segment inverted>
            <Container>
            <Grid columns={3}>
            <Grid.Row>
            <Grid.Column width="4">
            <Image src= "https://gosplan.app/favicon.png" id="icon"/>
            </Grid.Column>
            <Grid.Column width="4">
            <Header inverted size="large">Hakkımızda</Header>
            <p>Hakkımızda hiçbir şey yok.</p>
            </Grid.Column>
            <Grid.Column width="4">
            <Header inverted size="large">İletişim</Header>
            <p>melihcakay@gmail.com</p>
            <p>0544 409 30 71</p>
            </Grid.Column>
            <Grid.Column width="4">
            <Header inverted size="large">E-Bülten</Header>
            <p>E-Bültene abone olun.</p>
            <Input icon="mail" placeholder="email" iconPosition="left"/>
            
        
            
            </Grid.Column>
            </Grid.Row>
            </Grid>
            </Container>
            </Segment>
        </div>
    )
}
