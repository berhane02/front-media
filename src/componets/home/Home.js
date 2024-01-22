import Hero from '../hero/Hero'
//import WatchList from '../watchList/WatchList'

const Home = ({movies}) => {
    return (
       <Hero movies={movies} />
       //<WatchList/>
    )

}

export default Home