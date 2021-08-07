import React from 'react'
import { Menu, Button, Icon, Image, Container} from 'semantic-ui-react'
import './Navbar.css';


export default function Navbar() {
    


    


    return (
        <div>
            
        <Menu inverted size="mini">
        <Container>
        <Menu.Item>
        
        <Image src= "https://gosplan.app/favicon.png" id="img"/>

        </Menu.Item>
            <Menu.Item position="right" >
            <Button.Group>
            <Button icon inverted color="telegram">
                    <Icon name='telegram' />
                </Button>
            <Button icon inverted color="facebook" href="https://www.facebook.com/melih.cakay/">
                    <Icon name='facebook' />
                </Button>
            <Button icon inverted color="github" href="https://github.com/melihcakay">
                    <Icon name='github' />
                </Button>
                <Button icon inverted color="youtube" href="https://www.youtube.com/channel/UCtcYpHrCg6GdPYih84s7nUQ">
                    <Icon name='youtube' />
                </Button>
                <Button icon inverted color="discord">
                    <Icon name='discord' />
                </Button>
                <Button icon inverted color="instagram" href="https://www.instagram.com/brkerdm/">
                    <Icon name='instagram' />
                </Button>
            
                <Button icon inverted color="twitter" href='https://twitter.com/melihcakay' >
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
        </Container>
</Menu>


        </div>
    )
}
