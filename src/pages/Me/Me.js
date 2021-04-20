import React from 'react';
import { About, Offseted, Timeline, Title, Mt3, CodeWrapper, Code1, Methods, Dot, Span, Span1, String, Return} from './styles';
import { Element } from 'react-scroll'
import UserHeader from '../../components/UserHeader';
import Home from '.././Home';
import Work from '.././Work';
import Education from '.././Education';
import Layout from '../../components/Layout';


class Me extends React.Component {
    constructor({ user }) {
        super(user);
        this.setState({ user });
    }
    render() {
        return (
            <React.Fragment>
                <Layout user={this.props.user}>
                    <Element id='home' name='home'>
                        <UserHeader user={this.props.user} />
                    </Element>
                    <Element id='about' name='about'>
                        <Home user={this.props.user}></Home>
                        {/* <BackendImg/> */}
                        <About>
                            <Offseted>
                                <Timeline></Timeline>
                                <Title>
                                    &#60;More About/>
                            </Title>
                                <Mt3>
                                    <CodeWrapper>
                                        <Code1>
                                            <Methods>class </Methods>
                                            <Span>Valeriu Bahov </Span>
                                            <Methods>extends </Methods>
                                            <Span>React.Component</Span> &#123;
                                    </Code1>
                                        <Code1>
                                            <Dot>..</Dot>
                                            <Methods>constructor</Methods>
                                            <span>()&#123;</span>
                                        </Code1>
                                        <Code1 content="1">
                                            <Dot>....</Dot>
                                            <Methods>this</Methods>.
                                    <Span1>name</Span1>
                                            <span> = </span>
                                            <String>"Valeriu Bahov"</String>;
                                    </Code1>
                                        <Code1>
                                            <Dot>....</Dot>
                                            <Methods>this</Methods>.
                                    <Span1>dateOfBirth</Span1>
                                            <span> = </span>
                                            <String>"1994-07-23"</String>;
                                    </Code1>
                                        <Code1>
                                            <Dot>....</Dot>
                                            <Methods>this</Methods>.
                                    <Span1>email</Span1>
                                            <span> = </span>
                                            <String>"bahovvaleriu@gmail.com"</String>;
                                    </Code1>
                                        <Code1>
                                            <Dot>..</Dot>
                                            &#125;
                                    </Code1>
                                        <Code1>
                                            <Dot>..</Dot>
                                            <Span>workExperience</Span>()&#123;
                                    </Code1>
                                        <Code1>
                                            <Dot>....</Dot>
                                            <Return>return</Return>[
                                    </Code1>
                                        <Code1>
                                            <Dot>......</Dot>
                                            &#123;
                                        <String> '11/2013-Present' </String>:
                                        <String> 'Senior Programmer Analyst at R.G.I Group Ltd.' </String>
                                            &#125;,
                                    </Code1>
                                        <Code1>
                                            <Dot>......</Dot>
                                            &#123;
                                        <String> '03/2013-09/2013' </String>:
                                        <String> 'Junior Developer (Internship) at ZeroB s.r.l' </String>
                                            &#125;
                                    </Code1>
                                        <Code1>
                                            <Dot>....</Dot>]
                                    </Code1>
                                        <Code1>
                                            <Dot>..</Dot>&#125;
                                    </Code1>
                                        {/* EDUCATION */}
                                        <Code1>
                                            <Dot>..</Dot>
                                            <Span>education</Span>()&#123;
                                    </Code1>
                                        <Code1>
                                            <Dot>....</Dot>
                                            <Return>return</Return>[
                                    </Code1>
                                        <Code1>
                                            <Dot>......</Dot>
                                            &#123;
                                        <String> '2009-2014' </String>:
                                        <String> 'Diploma in Information Technology at I.I.S A. Avogadro' </String>
                                            &#125;
                                    </Code1>
                                        <Code1>
                                            <Dot>....</Dot>]
                                    </Code1>
                                        <Code1>
                                            <Dot>..</Dot>&#125;
                                    </Code1>
                                        {/* SKILLS */}
                                        <Code1>
                                            <Dot>..</Dot>
                                            <Span>skills</Span>()&#123;
                                    </Code1>
                                        <Code1>
                                            <Dot>....</Dot>
                                            <Return>return</Return>[
                                    </Code1>
                                        <Code1>
                                            <Dot>......</Dot>
                                            <String>'Java', 'Javascript', 'React', 'Typescript', 'HTML', 'CSS', 'AJAX', 'Bootstrap', 'Hibernate', 'Struts2', 'jQuery', 'RDBMS', 'MySQL', 'DB2', 'ORACLE', 'Maven', 'GIT', 'Node Ecosystem Tools (NPM)', 'JUnit', 'Soap UI', 'JIRA', 'Soap', 'REST'</String>
                                            ]
                                </Code1>
                                        <Code1>
                                            <Dot>..</Dot>&#125;
                                    </Code1>
                                        <Code1>
                                            &#125;
                                    </Code1>
                                    </CodeWrapper>
                                </Mt3>
                            </Offseted>
                        </About>
                    </Element>
                    <Element id='work' name='work'>
                        <Work user={this.props.user}></Work>
                    </Element>
                    <Element id='education' name='education'>
                        <Education user={this.props.user}></Education>
                    </Element>
                </Layout>
            </React.Fragment>
        )
    }
}
export default Me;