import React, { useState, useEffect} from 'react'
import {Segment,Header,Icon, Grid} from 'semantic-ui-react'
import JobAdvertisementService from '../Services/JobAdvertisementService';
import './JobAdvertisement.css';

export default function JobAdvertisement() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService
        .getJobAdvertisements()
        .then((result) => setJobAdvertisements(result.data.data))
    }, [])

    return (
        <div >
{jobAdvertisements.map((jobAdvertisement) => (
            <Segment placeholder key={jobAdvertisements.id}>
            
             <Grid columns={5} stackable >
    
    <Grid.Row verticalAlign='middle' >
  <Grid.Column>
    <Header icon>
      <Icon name='travel' />
      {jobAdvertisement.job.title}
    </Header>
  </Grid.Column>

  <Grid.Column>
    <Header icon>
      <Icon name='clock' />
      {jobAdvertisement.employmentType.employmentType}
    </Header>
  </Grid.Column>
  
  <Grid.Column>
    <Header icon>
      <Icon name='calendar' />
      {jobAdvertisement.applicationDeadline}
    </Header>
  </Grid.Column>

  <Grid.Column>
    <Header icon>
      <Icon name='map marker alternate' />
      {jobAdvertisement.city.cityName}
    </Header>
  </Grid.Column>

  <Grid.Column>
    <Header icon size="medium">
      <Icon name='add circle' />
    </Header>
  </Grid.Column>

</Grid.Row>


             </Grid>
             
            </Segment>
            ))} 
        </div>
    )
}
