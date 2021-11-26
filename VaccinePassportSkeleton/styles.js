export default theme => ({
  card: {
    height: 72,
    backgroundColor: 'white',
    width: '100%',
    margin: '0.5rem 0',
    borderRadius: 16,
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
  },
  skeleton: {
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: 16,
    backgroundImage: 'linear-gradient(90deg,rgba(211,211,211,0),rgb(211,211,211,0.8),rgba(211,211,211,0))',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    animation: '$loading 3s infinite',
  },
  '@keyframes loading': {
    '0%': {
      backgroundPosition: -750,
    },
    '70%': {
      backgroundPosition: 750,
    },
    '100%': {
      backgroundPosition: 750,
    }
  }
});