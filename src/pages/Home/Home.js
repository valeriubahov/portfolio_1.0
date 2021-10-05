import React from 'react';
import { Paragraph, ColorBlockStart, H1 } from '../../styles';
import { Unscrollable, LeftDiv, RightDiv, HomeDiv } from './styles';
import 'react-circular-progressbar/dist/styles.css';



class Home extends React.Component {

  constructor({ user }) {
    super({ user });
    this.setState({ user });
  }
  render() {
    return (
      <HomeDiv>
        <LeftDiv>
          <ColorBlockStart>
            <H1>Who we are</H1>
            <Unscrollable>
              <Paragraph>
                We know that our clients want their bathroom or kitchen renovations to be given the professional attention they deserve. We have a team with a diverse array of expertise, bringing the experience needed to handle a remodel of any size.
              </Paragraph>
            </Unscrollable>
          </ColorBlockStart>
        </LeftDiv>

        <RightDiv><ColorBlockStart>
          <H1> We’re All About Our Clients</H1>
          <Unscrollable>
            <Paragraph>
              We value working with our clients as partners. Listening to your needs and keeping communication open allows us to bring your vision to reality. Whether it’s a custom bathroom, or a whole kitchen renovation, our experience has helped us develop the ideas and techniques to execute projects of all sizes.
            </Paragraph>
          </Unscrollable>
        </ColorBlockStart></RightDiv>

        <LeftDiv>
          <ColorBlockStart>
            <H1>Kitchen Renovation</H1>
            <Unscrollable>
              <Paragraph>Whether you’re undergoing a small renovation or a complete remodel, the first step should be planning and design. A well-thought-out and detailed plan is a must for any renovation, but it’s especially important during a kitchen renovation. We have the experience and expertise to help you plan and design a kitchen that is both functional and beautiful.

              </Paragraph>
            </Unscrollable>
          </ColorBlockStart>
        </LeftDiv>

        <RightDiv>
          <ColorBlockStart>
            <H1>Bath Renovation</H1>
            <Unscrollable>
              <Paragraph>The bathroom is without a doubt one of the most important rooms in a house. Whether you’re looking to update, remodel, or add an additional bathroom, our experienced team can help guide you through the process. A bathroom renovation’s primary consideration should be function, but that doesn’t mean you have to give up elegance and sophistication. Our team will help you incorporate the latest trends while making sure to maintain function for your entire family.</Paragraph>
            </Unscrollable>
          </ColorBlockStart>
        </RightDiv>
      </HomeDiv>
    );
  }
}

export default Home;