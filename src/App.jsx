import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

//Import data
import menu from './data/header_nav_menu';
import comics from './data/comics_detail';
import banner_list from './data/footer_banner_menu';

function App() {
  return (
    <>
      <AppHeader menu = {menu}/>
      <AppMain comics = {comics}/>
      <AppFooter banner_list = {banner_list}/>
    </>
  )
}

export default App
