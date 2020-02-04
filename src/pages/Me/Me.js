import React, { Component } from 'react';
import Typical from 'react-typical';
import Layout from '../../components/Layout';
import { AboutMe,SectionTitle } from '../../styles';
import { Write } from './styles';

const steps = [
    "Hello! 👋", 1000,
    "I am Valeriu!", 2000,
    "I am a Software Developer", 2000,
    "I am a Web Developer 👌", 2000,
    "If it doesn't seem interesting to you already",2000,
    "then take a look at my portfolio", 4000,
    "HAVE FUN!", 1000
];

class Me extends React.Component {
    constructor({ user }) {
        super(user);
        this.setState({ user });
    }
    render() {
        return (
            <div>
                <Layout user={this.props.user}>
                    <Write>
                        <SectionTitle>
                            <Typical
                                steps={steps}
                                loop={1}
                                wrapper="b"
                            />
                            </SectionTitle>
                    </Write>
                </Layout>
            </div>
                    )
                }
            }
export default Me;