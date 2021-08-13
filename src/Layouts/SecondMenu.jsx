import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import { routes } from "../Pages/Routes";
import './SecondMenu.css';

export default function SecondMenu() {

    const {jobAdvertisement} = routes;

    return (
        <div>
            <Menu>
                <Container>
                    <Menu.Item>
                        <Button href={jobAdvertisement.path}>{jobAdvertisement.title}</Button>
                    </Menu.Item>
                </Container>
            </Menu>
        </div>
    )
}
