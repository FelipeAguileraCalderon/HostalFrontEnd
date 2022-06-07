<script>
  import { Router, Route, navigate } from "svelte-navigator";
  import Header from "./components/Header.svelte";
</script>


<Router>
  <Route path="/">
    {navigate("/home", { replace: true })}
  </Route>
  <Route path="home">
    <Header></Header>
  </Route>
</Router>


<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
