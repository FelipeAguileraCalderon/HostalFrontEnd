<script>
  import { Router, Route, navigate } from "svelte-navigator";
  import Header from "./components/Header.svelte";
  import Login from "./routes/Login.svelte";
  import Register from "./routes/Register.svelte";
  import Home from "./routes/user/Home.svelte";
</script>

<Router>
  <Route path="/">
    {navigate("/login", { replace: true })}
  </Route>
  <Route path="login">
    <Login />
  </Route>
  <Route path="register">
    <Register />
  </Route>
  <Route path="home">
    <Home />
  </Route>
  <Route path="*">
    <h1>404 Route not Found</h1>
  </Route>
</Router>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
