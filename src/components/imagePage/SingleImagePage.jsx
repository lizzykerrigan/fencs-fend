import React, { Component } from "react";
import SingleImagePageCard from "../CardComponents/SingleImagePageCard";
import { gql } from "apollo-boost";

export default class singleImagePage extends Component {
  state = { image_by_pk: null, voteChange: 0, voteMade: false };

  componentDidMount = () => {
    const { image_id } = this.props;
    return this.props.client
      .query({
        query: gql`
          {
            images_by_pk(image_id: ${image_id}) {
              title
              price
              description
              posted_by
              date_uploaded
              display_name
              thumbnail_url
              obj_image_url
              likes
              category
            }
          }
        `
      })
      .then(image => {
        this.setState({
          image_by_pk: image.data.images_by_pk
        });
      });
  };

  render() {
    const { image_by_pk } = this.state;
    const { image_id } = this.props;
    const { voteChange } = this.state;
    return (
      <div>
        {this.state.image_by_pk && (
          <>
            <SingleImagePageCard
              id={image_id}
              vote={this.handleVote}
              image={image_by_pk}
              voteChange={voteChange}
              voteMade={this.voteMade}
              client={this.props.client}
            />
          </>
        )}
      </div>
    );
  }

  voteMade = bool => {
    this.setState({ voteMade: !bool });
  };

  handleVote = (id, direction) => {
    if (this.state.voteChange !== 0) {
      this.patchVote(id, -1);
    } else {
      this.patchVote(id, direction);
    }
  };

  patchVote = (id, direction) => {
    return this.props.client
      .mutate({
        variables: { imageID: id, likes: direction },
        mutation: gql`
          mutation update_images($imageID: Int!, $likes: Int!) {
            update_images(
              where: { image_id: { _eq: $imageID } }
              _inc: { likes: $likes }
            ) {
              returning {
                likes
              }
            }
          }
        `
      })
      .then(data => {
        const { image_by_pk } = this.state;
        const newLikes = data.data.update_images.returning[0].likes;
        const dif = newLikes - image_by_pk.likes;
        this.setState({ voteChange: dif });
      });
  };
}
