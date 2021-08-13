import React from 'react'
import { Grid, Segment, Button, Icon, Header } from 'semantic-ui-react'
import { routes } from './Routes';

export default function LoginSelector() {

    const {candidateLogin, employerLogin, employeeLogin} = routes;

    return (
        <div>
            <Segment>
                <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header icon size="huge" textAlign="center">
                        <Icon name="user"/>
                        <br/>
                        <Button size="big" href={candidateLogin.path}>{candidateLogin.title}</Button>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header icon size="huge" textAlign="center">
                        <Icon name="users"/>
                        <br/>
                        <Button size="big" href={employerLogin.path}>{employerLogin.title}</Button>
                        </Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header icon size="huge" textAlign="center">
                        <Icon name="user plus"/>
                        <br/>
                        <Button size="big" href={employeeLogin.path}>{employeeLogin.title}</Button>
                        </Header>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}
