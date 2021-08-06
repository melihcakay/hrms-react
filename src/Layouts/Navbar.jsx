import React from 'react'
import { Menu, Button, Icon, Image} from 'semantic-ui-react'
import './Navbar.css';


export default function Navbar() {
    return (
        <div>
            
        <Menu inverted size="mini">
        <Menu.Item>
        
        <Image src= "https://gosplan.app/favicon.png" id="img"/>

        </Menu.Item>
            <Menu.Item position="right" >
            <Button.Group>
            <Button icon inverted>
                    <Icon name='telegram' />
                </Button>
            <Button icon inverted>
                    <Icon name='facebook' />
                </Button>
            <Button icon inverted>
                    <Icon name='github' />
                </Button>
                <Button icon inverted>
                    <Icon name='youtube' />
                </Button>
                <Button icon inverted>
                    <Icon name='discord' />
                </Button>
                <Button icon inverted>
                    <Icon name='instagram' />
                </Button>
                <Button icon inverted>
                    <Icon name='twitter' />
                </Button>
            </Button.Group>
            <Menu.Item>
            <Button.Group>
            <Button icon inverted>
                    <Icon name='bell' />
                </Button>
                <Button icon inverted>
                    <Icon name='comments' />
                </Button>
            </Button.Group>
            </Menu.Item>
        </Menu.Item >
                <Menu.Item>
                    <Button.Group>
                        <Button primary>Kayıt Ol</Button>
                        <Button.Or />
                        <Button secondary>Giriş Yap</Button>
                    </Button.Group>
        </Menu.Item>
        
</Menu>


        </div>
    )
}
