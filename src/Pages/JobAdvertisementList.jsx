import React from 'react'
import {Grid, Header, Icon} from 'semantic-ui-react'
import SideBar from '../Layouts/SideBar'
import JobAdvertisement from './JobAdvertisement'

export default function JobAdvertisementList() {
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
        <JobAdvertisement/>
      </Grid.Column>
    </Grid.Row>
    </Grid>
        </div>
    )
}
