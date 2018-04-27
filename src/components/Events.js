import React from 'react'
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap'

export default class Events extends React.Component {
    render() {
        return(
            <Grid>
                <Jumbotron>
                    <h2 style={{fontFamily: 'Josefin Sans'}}>Kilpailut ja tapahtumat</h2>
                </Jumbotron>
                <Row style={StyleSheet.main} className="show-grid text-center">
                    <Col xs={12} md={12}>
                        LöscabaLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut turpis dolor, interdum sed leo a, consequat lacinia elit. Duis in turpis venenatis, convallis felis sit amet, laoreet ex. Sed nec neque congue, tincidunt sem efficitur, venenatis libero. Ut efficitur augue a enim cursus, eu luctus turpis maximus. Duis nibh lorem, egestas eget augue sit amet, tempus gravida libero. Integer a arcu nulla. Nulla mi lacus, congue sit amet tincidunt auctor, commodo quis mi. Quisque vitae sapien congue, finibus erat eu, facilisis ante. Cras dignissim ligula lacus, et finibus massa pharetra eget.

                        Praesent tempor orci ac nibh pulvinar vehicula. Integer rhoncus efficitur ultrices. Morbi sollicitudin condimentum enim, vel fermentum lectus cursus vitae. Aenean scelerisque magna id tellus suscipit mollis. Morbi eget nisl a nibh pharetra pulvinar. Duis a tincidunt velit. Sed laoreet elementum nisi vel elementum. Suspendisse pharetra nisl sed elementum malesuada. Aliquam lobortis leo non enim lacinia, venenatis sodales metus ultricies. In hac habitasse platea dictumst. Nam et venenatis lacus, eu hendrerit tellus. Sed vel posuere enim. Aliquam accumsan nisi at ipsum convallis bibendum.

                        Curabitur interdum nibh sit amet elit tempus accumsan. Nulla facilisi. Phasellus aliquam ipsum massa, a aliquet ante imperdiet ac. Mauris nibh risus, lacinia vitae interdum at, rutrum malesuada enim. Aliquam ut ligula in tortor pharetra aliquam aliquet id lectus. Aliquam varius magna sed orci pulvinar condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec molestie sit amet velit vel viverra. Integer eu neque lobortis, maximus tellus ut, porttitor nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

                        Donec ante sapien, ultricies in sapien eget, bibendum blandit nisl. Nullam sodales nulla imperdiet, efficitur est et, elementum metus. Nunc sit amet sollicitudin leo, sed laoreet velit. Nunc ac efficitur elit, ut iaculis est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus eu nisl id nibh lacinia consectetur eget eu mauris. Integer ut lectus sit amet turpis mattis posuere. Etiam nec aliquet nisi. Aliquam nibh libero, cursus at lectus sit amet, tristique accumsan mauris. Vivamus finibus neque odio, vel fermentum ante rhoncus at. Proin in sodales dolor. Ut semper dolor at iaculis semper. Sed dignissim finibus enim, et ultricies metus volutpat quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi ornare, nunc eu rhoncus fermentum, metus ante porttitor massa, sit amet sodales urna lorem quis nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

                        Morbi molestie dui sit amet quam auctor vulputate. Etiam luctus velit id dui aliquet, in blandit leo commodo. Aenean tristique orci nunc, vitae sollicitudin lacus volutpat id. Suspendisse non eros eu erat venenatis auctor. Duis feugiat malesuada est in pharetra. Nullam risus mauris, egestas aliquet odio nec, tempor faucibus lorem. Mauris blandit, ante vel porta gravida, dui orci bibendum lectus, nec egestas lectus nunc sed justo. Vestibulum ligula metus, viverra accumsan placerat non, blandit non mauris. Aenean pulvinar blandit sem, sed tempus nulla volutpat eget. Curabitur quis leo nunc. Curabitur nec te
                    </Col>

                </Row>
            </Grid>
        )
    }
}

const StyleSheet = {
    main: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '1.2em'
    }
}