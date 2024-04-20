import React, { useState } from 'react';
import { Box, Container, CssBaseline, Grid, Typography, Paper, Card, CardMedia, CardContent, CardActions, TextField } from '@mui/material';
import Navbar from '../../component/Navbar'; // Import your Navbar component
import Footer from '../../component/Footer'; // Import your Footer component
import Img from '../../assets/react.svg'
import { Link } from 'react-router-dom';
import CustomButton from '../../component/Button';
// Sample image URLs for featured items
const sampleImage1 = Img;
const sampleImage2 = Img;
const sampleImage3 = Img;

// Home page component
function Home() {
  const [showFullText, setShowFullText] = useState(false);

  // Handler for toggling the visibility of full text
  const handleToggleText = () => {
      setShowFullText(!showFullText);
  }
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Box sx={{ marginTop: '100px' }}>
          {/* Welcome message */}
          <Typography variant="h3" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 4 }}>
            Welcome to Our Website
          </Typography>

          <Grid container spacing={3}>
            {/* Featured Items Section */}
            <Grid item xs={12}>
              <Typography variant="h4" sx={{ marginBottom: 2 }}>
                Featured Items
              </Typography>
              <Grid container spacing={3}>
                {/* Item 1 */}
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={sampleImage1}
                      alt="Sample Item 1"
                      sx={{ objectFit: 'contain' }}
                    />

                    <CardContent>
                      <Typography variant="h5" component="div">
                        Item 1
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Description of item 1 goes here. Add more details as needed.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <CustomButton size="small" variant="contained" color="primary"text="Learn More" />
                      
                    </CardActions>
                  </Card>
                </Grid>

                {/* Item 2 */}
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={sampleImage2}
                      alt="Sample Item 2"
                      sx={{ objectFit: 'contain' }}
                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Item 2
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Description of item 2 goes here. Add more details as needed.
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <CustomButton size="small" variant="contained" color="primary"text="Learn More" />

                    </CardActions>
                  </Card>
                </Grid>

                {/* Item 3 */}
                <Grid item xs={12} sm={6} md={4}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={sampleImage3}
                      alt="Sample Item 3"
                      sx={{ objectFit: 'contain' }}

                    />
                    <CardContent>
                      <Typography variant="h5" component="div">
                        Item 3
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Description of item 3 goes here. Add more details as needed.
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <CustomButton size="small" variant="contained" color="primary"text="Learn More" />

                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* Services Information Section */}
          {/* <Grid item xs={12} sx={{ marginTop: 4 }}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Our Services
              </Typography>
              <Typography variant="body2">
                Describe the services you offer here. You can add more details about the benefits and features of your services.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste labore laudantium tempore pariatur inventore accusamus molestiae atque asperiores maiores architecto illo quos quas harum, ipsam beatae voluptates enim autem quis.
                Voluptatum, necessitatibus saepe voluptatibus sapiente, amet ea officiis a quo laboriosam quia illum facere soluta culpa est consequatur magni qui eum iusto! Corrupti, dolor magnam enim itaque voluptatem asperiores culpa!
                Eaque sit quae perspiciatis ipsam dolorem recusandae impedit omnis incidunt delectus perferendis fuga quo ad sint illum laboriosam libero magnam alias iste, deleniti blanditiis. Nihil nobis ut quae perspiciatis sed?
                Similique explicabo iusto maiores magnam minima aspernatur deleniti sequi at. Ut saepe laudantium dolore praesentium enim id blanditiis voluptate excepturi sint ullam. Magnam facilis rem beatae architecto ex adipisci voluptates!
                Alias quia error maxime ad hic dolores ab pariatur praesentium? Consequuntur praesentium laborum adipisci nihil explicabo quas maxime quaerat et, aperiam qui vero hic eius debitis ipsa natus illum minima.
                Ab, beatae esse velit iusto, autem magni harum expedita iste cum aut ea? In pariatur quaerat iste hic quia culpa soluta asperiores. Consectetur sapiente perferendis tempore optio facere minus repellendus.
                Sunt et itaque tempora cupiditate, doloremque ea at nulla sint, id soluta quis eos provident in ipsum fugit deserunt tempore molestias explicabo facere labore facilis officia voluptate, exercitationem cumque! Sit.
                Ab, enim veniam exercitationem impedit deserunt blanditiis adipisci placeat minus? Iure quos, cum sit ducimus tempora temporibus vero, natus iste asperiores officia laboriosam. Ea dicta praesentium pariatur quibusdam eaque aspernatur?
                Alias fugiat, impedit aut adipisci consectetur laudantium, beatae placeat rerum quos sint unde sunt cum quam minus est nesciunt pariatur fuga, blanditiis quibusdam tempora eius velit officia! Culpa, veniam quo.
                Quam dolore facilis commodi dignissimos delectus eveniet, eos officia numquam iste labore quas provident cum modi reprehenderit! Recusandae iusto reprehenderit perspiciatis qui quaerat iure obcaecati sit nemo eius, molestias optio?
                Quos, sunt dolore possimus sapiente explicabo distinctio numquam nulla corporis corrupti libero reprehenderit, suscipit, dolorem voluptate magni consequatur natus? Eaque aperiam omnis quia laudantium laborum voluptate fugit accusamus quos id.
                Odio provident molestiae fugit libero, ipsam maiores tenetur dolor deleniti placeat, perferendis ea sint corrupti nulla quo, itaque id sapiente temporibus ad nobis rem esse excepturi laborum amet cumque. Commodi!
                Voluptatum quo aliquid laborum atque voluptate quas, cum tenetur perferendis aliquam ut nisi. Ipsum ducimus fugit id, laudantium accusamus commodi asperiores, iure maiores placeat eos nulla numquam, nobis nostrum officia.
                Ducimus inventore nam repellat vero cumque, ipsa aspernatur neque! Praesentium fuga architecto iste sapiente incidunt quas officiis atque. Repudiandae explicabo voluptatum inventore dolorum, eligendi ea illum voluptas consequatur ut sunt!

              </Typography>
              <CustomButton
                  variant="contained"
                  color="inherit"
                  component={Link}
                  to="/services"
                  sx={{ marginTop: 2 }}
                >
                  Go to Services Page
                </CustomButton>
            </Paper>
          </Grid> */}
           <Grid item xs={12} sx={{ marginTop: 4 }}>
            <Paper
                elevation={3}
                sx={{
                    padding: 3,
                    textAlign: 'center',
                    backgroundColor: '#f5f5f5',
                    borderRadius: 2,
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                    Our Services
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        // Limit the text to a certain number of lines and show ellipsis if overflows
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: showFullText ? 'unset' : 3, // Adjust the number of lines as needed
                    }}
                >
                    Describe the services you offer here. You can add more details about the benefits and features of your services.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste labore laudantium tempore pariatur inventore accusamus molestiae atque asperiores maiores architecto illo quos quas harum, ipsam beatae voluptates enim autem quis.
                    {/* Rest of your content here */}
                </Typography>
                {/* CustomButton to toggle the visibility of full text */}
                {!showFullText && (
                    <Typography
                        variant="body2"
                        color="primary"
                        sx={{ cursor: 'pointer', marginBottom: 2 }}
                        onClick={handleToggleText}
                    >
                        Show more...
                    </Typography>
                )}
                {showFullText && (
             <>
                  <Typography variant='body1'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis odio pariatur obcaecati enim illum quo voluptas? Fuga fugiat quod maxime? Fuga dolor voluptates itaque eum harum ea, quis nisi voluptate!
                    Dolorum tempore magni deleniti vel accusantium expedita, ea mollitia quia error cumque dolores blanditiis quisquam! Fuga debitis magnam qui eveniet necessitatibus praesentium voluptate, harum similique odio tempore possimus, tempora vitae?
                    Corrupti laborum tempore illo repellat at sequi quidem ad sint. Voluptatibus, ad odio molestias sunt illum officiis eveniet accusantium quasi est quis sed excepturi, doloremque harum ab. Vel, veritatis aut!
                    Esse reiciendis est, distinctio aut aliquam aperiam eveniet quaerat exercitationem, nihil ad nulla ducimus sequi natus non ullam maiores? Veritatis nihil consequatur quisquam quos nesciunt repellendus consectetur eveniet vero ad.
                    Ducimus error illo, consequuntur itaque tempora ut saepe eligendi autem adipisci ipsa, veniam omnis corporis expedita nostrum delectus eos laboriosam asperiores mollitia incidunt tenetur? Praesentium nisi nam dicta totam omnis.
                    Placeat, ipsa vitae? Deleniti molestias minima eius tempora repellat laboriosam sequi cumque nobis dicta, quidem provident, nisi aspernatur et nemo tempore. A ipsam veniam deleniti delectus officia voluptate fugit maiores?
                    Accusantium laboriosam quidem error voluptatem consectetur delectus, veritatis repellendus harum at, deserunt in, consequuntur eaque velit. Nostrum incidunt ducimus deserunt. Vitae, repellat facere est harum soluta odio aut similique aperiam!
                    Modi unde facere architecto ducimus? Maxime deserunt inventore obcaecati, et, beatae nobis amet reprehenderit eveniet fuga numquam officiis sit nemo dignissimos accusamus quia nostrum ipsam, ea quae dolorem vitae recusandae!
                    Suscipit repudiandae sapiente corporis, hic eligendi id enim. Amet distinctio eius cumque nisi quos at? A, praesentium maiores tempore qui explicabo accusantium sed sunt laudantium repellendus rerum recusandae natus quod.
                    Quam fugit consequuntur debitis eligendi quasi praesentium aliquid, neque asperiores libero assumenda repellendus culpa voluptas? Eius totam, saepe sunt illum enim dolor! Accusamus ipsum aliquam, officia sint praesentium cupiditate distinctio!
                    Accusamus, natus officiis, error enim et, est reiciendis sed quae illum totam omnis id! Cupiditate saepe quibusdam magni voluptatem minima possimus nisi facilis ducimus odio temporibus. Incidunt dolorem quae ea!
                    Blanditiis totam reiciendis vero, adipisci exercitationem repellat molestias delectus qui eius accusantium soluta saepe accusamus, laborum architecto magni impedit facere. Consectetur cumque architecto unde velit provident facere magni excepturi nulla.
                    Quos officiis debitis eligendi quia sequi expedita laudantium in ipsum enim qui accusamus impedit aut illum vel iste, ullam explicabo nobis consequatur numquam dolorum vitae placeat, nulla deserunt modi. Mollitia.
                    Deleniti quidem facilis fuga at. Magni exercitationem facere, aut eligendi quia maiores veniam sapiente inventore nulla expedita ea sequi quasi atque eos asperiores deleniti optio, quo dolorum eius! Aspernatur, eius.
                    Quasi molestias eligendi expedita est unde fugiat exercitationem nobis velit quisquam omnis! Ut qui molestias consequatur cupiditate, quia quo beatae nam praesentium deserunt eaque quas. At est omnis eaque voluptatem.
                    Facilis ullam quia incidunt debitis architecto id nobis sed velit fuga atque at, suscipit, repudiandae tempora ipsum neque amet? Fuga culpa excepturi magni perspiciatis autem enim obcaecati, atque ea eligendi!
                    Quasi suscipit, dolore, numquam soluta rerum alias quia assumenda facilis consequatur amet non molestias at quo eos, fuga placeat tempora quaerat? Aspernatur neque repudiandae magni earum nisi adipisci officiis autem.
                    </Typography>
                      <Typography
                          variant="body2"
                          color="primary"
                          sx={{ cursor: 'pointer', marginBottom: 2 }}
                          onClick={handleToggleText}
                      >
                          Show less
                      </Typography>
             </>
                )}
                <CustomButton
                    variant="contained"
                    // color="inherit"
                    component={Link}
                    to="/services"
                    sx={{ marginTop: 2 }}
                    text="see more"
                />
            </Paper>
        </Grid>

          {/* Contact Information Section */}
          <Grid item xs={12} sx={{ marginTop: 4 }}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                We'd love to hear from you! Whether you have a question about our services,
                need support, or just want to say hello, feel free to reach out.
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                <strong>Address:</strong> 1234 Street Name, City, State, ZIP
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                <strong>Phone:</strong> +1 (123) 456-7890
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 1 }}>
                <strong>Email:</strong> contact@yourcompany.com
              </Typography>
              <Grid item xs={12} md={6}>
                {/* CustomButton to navigate to the contact page */}
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  If you have any specific inquiries, visit our contact page.
                </Typography>
                <CustomButton
                  variant="contained"
                  // color="inherit"
                  component={Link}
                  to="/contact"
                  sx={{ marginTop: 2 }}
                  text=" See more"
                />
              </Grid>
            </Paper>
          </Grid>




        </Box>
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;
