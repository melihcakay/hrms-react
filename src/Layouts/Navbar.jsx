import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import { routes } from "../Pages/Routes";
import './Navbar.css';

export default function Navbar() {

    const {jobAdvertisement, createJobExperience} = routes;

    return (
        <div>
            <Menu>
                <Container>
                    <Menu.Item>
                        <Button secondary href={jobAdvertisement.path}>{jobAdvertisement.title}</Button>
                    </Menu.Item>
                    <Menu.Item>
                        <Button secondary  href={createJobExperience.path}>{createJobExperience.title}</Button>
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    )
}
