import React, { Component } from "react";
import ModelCard from "../3dModel/3dModelCard";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export default class singleImagePage extends Component {
  state = { image_by_pk: null };

  render() {
    const { image_by_pk } = this.state;
    return (
      <div>
        {this.state.image_by_pk && (
          <>
            <h1>{image_by_pk.title}</h1>
            <h4>{image_by_pk.description}</h4>
            <ModelCard image={image_by_pk} />
          </>
        )}
      </div>
    );
  }

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
        this.setState({ image_by_pk: image.data.images_by_pk });
      });
  };
}
