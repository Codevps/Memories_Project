import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import {
  AppBar,
  Button,
  Container,
  Grid,
  Grow,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from "./styles";
import ChipInput from "material-ui-chip-input";
import Paginate from "../Pagination/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
  const query = useQuery();
  const navigate = useNavigate();
  const classes = useStyles();

  const page = query.get("page");
  const searchQuery = query.get("searchQuery");

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container maxWidth="xl ">
        <Grid
          className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} md={4}>
            <AppBar>
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <ChipInput
                style={{ margin: "10px 0" }}
                label="Search Tags"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                className={classes.searchButton}
                variant="contained"
                color="primary"
              >
                Search
              </Button>
            </AppBar>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper className={classes.pagination} elevation={6}>
              <Paginate /* page={page} */ />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
