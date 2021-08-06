import React from 'react'
import {Grid, Header, Icon} from 'semantic-ui-react'
import SideBar from './SideBar'
import MainContent from './MainContent'

export default function Main() {
    return (
        <div>
        <Grid columns={2} divided>
    <Grid.Row >
      <Grid.Column width="4">
        <Header size="huge"><Icon name="filter"/>Filtreler </Header>
        <SideBar/>
      </Grid.Column>
      <Grid.Column width="12">
        <Header size="huge"><Icon name="briefcase"/>İş İlanları</Header>
        <MainContent/>
      </Grid.Column>
    </Grid.Row>
    </Grid>
        </div>
    )
}
