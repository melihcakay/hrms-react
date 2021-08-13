import React from 'react'
import { Button, Grid, Header, Icon, Segment } from 'semantic-ui-react'
import { routes } from './Routes';

export default function RegisterSelector() {

    const {candidateRegister, employerRegister} = routes;

    return (
        <div>
            <Segment>
                <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header icon size="huge" textAlign="center">
                        <Icon name="user"/>
                        <br/>
                        <Button size="big" href={candidateRegister.path}>{candidateRegister.title}</Button>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header icon size="huge" textAlign="center">
                        <Icon name="users"/>
                        <br/>
                        <Button size="big" href={employerRegister.path}>{employerRegister.title}</Button>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}
