import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
  Grid,
  Image,
  Menu,
  Header,
  Button,
  Rating,
  Segment,
  Icon,
  Label,
  Sticky,
  Rail,
  List,
} from 'semantic-ui-react';
import Media from 'react-media';
import styled from 'styled-components';
import NearbyRequest from '../helpers/nearbyRequest';
import device from '../../helpers/devices';
import Styles from '../../styles/requestPage';
import shane from '../../images/shane.png';
import donald from '../../images/donald.jpg';
import lebron from '../../images/lebron.png';
import blackman from '../../images/blackman.jpg';
import donaldkek from '../../images/donaldkek.jpg';
import home from '../../images/home.jpg';
import UserReview from '../helpers/userReview';

const review = {
  fields: [
    {
      image: lebron,
      username: 'Lebron James',
      date: 'January 6, 2018',
      rating: 5,
      text:
        'This service is really one of a kind. I feel as though this user was easy and able to give me simple directions on how he would like me to mow his lawn. I worked really hard and I feel as though I was able to achieve a lot from him. He payed quickly too!',
    },
    {
      image: donald,
      username: 'The Donald',
      date: 'November 9, 2016',
      rating: 3,
      text:
        'Really needs to work on his communications skills I spent over half the time trying to reach him and get the proper details so i could do a good job. This service is really one of a kind. I feel as though this user was easy and able to give me simple directions on how he would like me to mow his lawn. I worked really hard and I feel as though I was able to achieve a lot from him. He payed quickly too!',
    },
    {
      image: blackman,
      username: 'Black Man',
      date: 'August 9, 2018',
      rating: 4,
      text:
        'This service is really one of a kind. I feel as though this user was easy and able to give me simple directions on how he would like me to mow his lawn. I worked really hard and I feel as though I was able to achieve a lot from him. He payed quickly too!',
    },
    {
      image: donaldkek,
      username: 'Kek',
      date: 'July 4, 2018',
      rating: 4,
      text:
        'Really needs to work on his communications skills I spent over half the time trying to reach him and get the proper details so i could do a good job. This service is really one of a kind. This service is really one of a kind. I feel as though this user was easy and able to give me simple directions on how he would like me to mow his lawn. I worked really hard and I feel as though I was able to achieve a lot from him. He payed quickly too!',
    },
    {
      image: shane,
      username: 'Shane Paul',
      date: 'July 2, 2018',
      rating: 5,
      text:
        'This service is really one of a kind. I feel as though this user was easy and able to give me simple directions on how he would like me to mow his lawn. I worked really hard and I feel as though I was able to achieve a lot from him. He payed quickly too!',
    },
  ],
};

const MyImage = styled(Image)`
  &&& {
    width: 100%;

    @media ${device.mobileS} {
      height: 270px;
    }
    @media ${device.mobileM} {
      height: 300px;
    }
    @media ${device.mobileL} {
      height: 330px;
    }
    @media ${device.tablet} {
      height: 440px;
    }
  }
`;

const MySegment = styled(Segment)`
  &&& {
    :hover {
      box-shadow: 0 12px 24px -2px gray !important;
      transform: translateY(4px);
    }
  }
`;

const ItemLink = styled(Link)`
  &&& {
    :hover {
      color: #1205ff !important;
      border-bottom: 2px solid #1205ff !important;
    }
  }
`;

const HeaderRow = styled(Menu.Item)`
  &&& {
    @media (min-width: 768px) {
      margin-top: 7em !important;
    }
  }
`;

export default class requestPage extends Component {
  state = { context: null, context2: null };

  handleContextRef = (ref) => {
    this.setState({ context: ref });
  };
  handleContextRef2 = (ref) => {
    this.setState({ context2: ref });
  };
  renderReview = field => (
    <UserReview
      rating={field.rating}
      username={field.username}
      date={field.date}
      text={field.text}
      image={field.image}
    />
  );
  renderReviews = (form) => {
    const formUI = form.fields.map(field => this.renderReview(field));
    return formUI;
  };
  render() {
    return (
      <div ref={this.handleContextRef2}>
        <Grid container style={Styles.grid}>
          <Grid.Row textAlign="center" style={Styles.imageRow}>
            <MyImage src={home} />
          </Grid.Row>
          <div ref={this.handleContextRef} style={{ width: '100%', paddingTop: '1em' }}>
            <Grid>
              <Grid.Row style={Styles.mainRow}>
                <Grid.Column mobile={16} tablet={16} computer={10} style={Styles.leftContent}>
                  <Media
                    query={device.tablet}
                    render={() => (
                      <Grid.Row>
                        <Rail
                          internal
                          position="left"
                          attached
                          style={{ top: 'auto', height: 'auto', width: '100%' }}
                        >
                          <Sticky
                            context={this.state.context2}
                            onStick={() => {
                              this.state.context2.children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[1].style.zIndex = 1000;
                            }}
                          >
                            <Menu fluid widths={3} borderless style={Styles.TopMenu}>
                              <Menu.Item style={Styles.menuItem}>
                                <ItemLink
                                  activeClassName="selected"
                                  activeStyle={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                  }}
                                  smooth
                                  to="/users/RequestPage#overview"
                                  style={Styles.itemLink}
                                >
                                  Overview
                                </ItemLink>
                              </Menu.Item>
                              <Menu.Item style={Styles.menuItem}>
                                <ItemLink
                                  activeClassName="selected"
                                  activeStyle={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                  }}
                                  smooth
                                  to="/users/RequestPage#reviews"
                                  style={Styles.itemLink}
                                >
                                  Reviews
                                </ItemLink>
                              </Menu.Item>
                              <Menu.Item style={Styles.menuItem}>
                                <ItemLink
                                  activeClassName="selected"
                                  activeStyle={{
                                    fontWeight: 'bold',
                                    color: 'red',
                                  }}
                                  smooth
                                  to="/users/RequestPage#map"
                                  style={Styles.itemLink}
                                >
                                  Map
                                </ItemLink>
                              </Menu.Item>
                            </Menu>
                          </Sticky>
                        </Rail>
                      </Grid.Row>
                    )}
                  />

                  <HeaderRow textAlign="left" style={Styles.headerRow}>
                    <Header style={Styles.mainHeader} id="overview">
                      Just a small cabin near clear creek lake with a few trees and sticks.
                    </Header>
                  </HeaderRow>
                  <Grid.Row textAlign="left" style={Styles.locationRow}>
                    <Header style={Styles.locationHeader}>Grinnell, IA</Header>
                  </Grid.Row>
                  <Grid.Row textAlign="left" style={Styles.userRow}>
                    <Header>
                      <Image circular src={shane} style={Styles.userIcon} />
                      Shane Drafahl
                    </Header>
                  </Grid.Row>
                  <Grid.Row style={Styles.ratingRow}>
                    <Rating
                      disabled
                      icon="star"
                      defaultRating={4}
                      maxRating={5}
                      style={Styles.userRating}
                    />
                    <div style={Styles.ratingReviews}>10 Reviews</div>
                  </Grid.Row>
                  <Grid.Row textAlign="left" style={Styles.jobRow}>
                    <Segment style={Styles.descriptionSegment}>
                      <Header style={Styles.descriptionHeader}>Job Description</Header>
                      <p>
                        Thea and Georges cottage, set off a quiet road, is bright, clean, and
                        cheerful. Its newly renovated, with great attention to detail, making for a
                        relaxing stay. The location is a short walk to the main drag of Abbot
                        Kinney, where youll find lots of shops, cafes, restaurants, and the buzz of
                        Venice. Overall, its a beautiful flat and is recommended for anyone who
                        wants a relaxing time in a great neighborhood with friendly, attentive
                        hosts.This is a super-sweet cottage in the back of our property, perfect for
                        a professional looking for a quiet place to come home to after a hard days
                        work, for a couple wanting some peace and quiet, or for a family with one or
                        two small children. Weve just renovated it, and furnished it with lots of
                        love and care.Were one mile from Venice Beach, half a mile to the Venice
                        Canals, and six blocks from the famous Abbot Kinney shopping street, with
                        LAs trendiest boutiques and restaurants.
                      </p>
                    </Segment>
                  </Grid.Row>
                  <Grid.Row textAlign="left" id="reviews">
                    <Header as="h1" style={Styles.reviewHeader}>
                      User Reviews
                    </Header>
                    {this.renderReviews(review)}
                  </Grid.Row>
                </Grid.Column>
                <Media query={device.laptop}>
                  {matches =>
                    (matches ? (
                      <Grid.Column computer={6} style={Styles.rightContent} floated="right">
                        <Rail
                          internal
                          attached
                          style={{ top: 'auto', height: 'auto', width: '100%' }}
                        >
                          <Sticky bottomOffset={50} context={this.state.context} offset={50}>
                            <MySegment raised padded textAlign="center">
                              <Label style={Styles.priceLabel}>
                                <Icon name="dollar" style={Styles.priceIcon} />
                                25
                              </Label>
                              <Button fluid style={Styles.requestButtonDesktop}>
                                Request Service
                              </Button>
                              <Header>Contact User</Header>
                            </MySegment>
                          </Sticky>
                        </Rail>
                      </Grid.Column>
                    ) : (
                      <Menu borderless fixed="bottom" style={Styles.bottomMenu} fluid>
                        <Menu.Item style={Styles.priceItem}>
                          <Label style={Styles.priceLabel}>
                            <Icon name="dollar" style={Styles.priceIcon} />
                            25
                          </Label>
                        </Menu.Item>
                        <Menu.Item style={Styles.requestItem}>
                          <Button style={Styles.requestButton}>Request Service</Button>
                        </Menu.Item>
                      </Menu>
                    ))
                  }
                </Media>
              </Grid.Row>
            </Grid>
          </div>
          <Grid.Row style={Styles.nearbyRow}>
            <Segment style={Styles.nearbySegment}>
              <Header style={Styles.nearbyHeader}>Nearby Requests</Header>
              <List horizontal style={Styles.nearbyList}>
                <NearbyRequest price={30} city="Grinnell" image={home} />
                <NearbyRequest price={25} city="Sully" image={home} />
                <NearbyRequest price={40} city="Newton" image={home} />
                <NearbyRequest price={15} city="Kellogg" image={home} />
              </List>
            </Segment>
          </Grid.Row>
          <div style={Styles.Bottom} />
        </Grid>
      </div>
    );
  }
}
