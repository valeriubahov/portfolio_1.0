import React from 'react';
import { Element } from 'react-scroll'
import UserHeader from '../../components/UserHeader';
import Home from '.././Home';
import Work from '.././Work';
import Layout from '../../components/Layout';
import Sidebar from '../../components/Sidebar';
import MobileNav from '../../components/MobileNav';
import { Footer} from './styles';

class Me extends React.Component {
    constructor({ user }) {
        super(user);
        this.setState({ user });
    }
    render() {
        return (
            <React.Fragment>
                <header>
                    <MobileNav user={this.props.user} />
                    <Sidebar user={this.props.user} />
                </header>

                <Layout user={this.props.user}>
                    <Element id='home' name='home'>
                        <UserHeader user={this.props.user} />
                    </Element>
                    <Element id='about' name='about'>
                        <Home user={this.props.user}></Home>

                    </Element>
                    <Element id='work' name='work'>
                        <Work user={this.props.user}></Work>
                    </Element>
                    <Footer>Valeriu Bahov</Footer>
                </Layout>
            </React.Fragment>
        )
    }
}
export default Me;