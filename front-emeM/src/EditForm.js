import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'

class EditForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: props.meme.id,
      image_url: props.meme.image_url,
      text_top: props.meme.text_top,
      text_bottom: props.meme.text_bottom
    }
  }

  handleInputChangeTop(e){
    this.setState({
      text_top: e.target.value
    })
  }

  handleInputChangeBottom(e){
    this.setState({
      text_bottom: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    const meme={
      id: this.state.id,
      image_url: this.state.image_url,
      text_top: this.state.text_top,
      text_bottom: this.state.text_bottom
    }
    this.props.onEdit(meme)
  }

  render() {
    console.log("props: ", this.props);
    let showImage = <img alt="" src={this.state.image_url} />
    let showTextTop =  <div id='text_top'> {this.state.text_top.toUpperCase()} </div>
    let showTextBottom =  <div id='text_bottom'> {this.state.text_bottom.toUpperCase()} </div>

    return(
      <div className="ui page grid main fluid">
        <div className="row">
          <div className="column padding-reset">
            <Grid centered>
              <Grid.Row container centered><br/><h1>Edit Your Meme</h1></Grid.Row>
                <Grid.Row verticalAlign='middle' centered>
                  <form onSubmit={this.handleSubmit.bind(this)}>
                    <Grid centered>
                      <label>Edit top text</label>
                      <input type="text" value={this.state.text_top} onChange={this.handleInputChangeTop.bind(this)}/><br/>
                      <label>Edit bottom text</label>
                      <input type="text" value={this.state.text_bottom} onChange={this.handleInputChangeBottom.bind(this)}/><br/>
                      <input type="submit" value="Edit and Publish Meme!" />
                    </Grid>
                  </form>
                </Grid.Row>
            </Grid> <br/><br/><br/><br/>
            <div>
              <Grid centered>
                <div className='wrapper'>
                  { this.state.uploadedFileCloudinaryUrl === '' ? null : showImage }
                <div className='display-text-center'>
                  { this.state.text_top === '' ? null : showTextTop }
                  { this.state.text_top === '' ? null : showTextBottom }
                </div>
              </div>
            </Grid>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default EditForm
