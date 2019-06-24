import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export default class singleImagePage extends Component {
  state = { image_by_pk: null };

  render() {
    return <div />;
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
