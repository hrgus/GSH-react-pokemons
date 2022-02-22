# React-Pokemons

If you are insterested in the backend for this application here is a link to my [rails-server](https://github.com/Ejguzman3988/rails-poke-backend-test)

## Component Lifecycle Methods

Each component that you write has multiple 'lifecycle methods'. These methods are methods that we can override to run code at certain times in our components lifecycle. [Here is the react documentation on lifecycle methods.](https://reactjs.org/docs/react-component.html) There are multiple stages of a components lifecycle.

### Common Lifecycles

- Mounting
  - constructor()
  - render()
  - componentDidMount()
- Updating
  - render()
  - componentDidUpdate()
- Unmounting
  - componentWillUnmount()

### Components We will use

- `Which method will we use to fetch?`
  - LCM: componentDidMount()
- `When We add a Pokemon To our Team What method should update our card?`
  - LCM: componentDidUpdate()
- `Toggle between all pokemons and our team`

---
- `Set An interval to start the timer application and clear it when necessary?`
  - componentDidMount && componentWillUnmount 
- `When the image is hovered over it should show second image.`
- `The filter should keep the same state, and filter through correctly.`
<br />
<a href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0">Presentation and Container components (old Blog)</a>
<a href="https://reactrouter.com/web/guides/quick-start">REACT ROUTER DOCS</a>