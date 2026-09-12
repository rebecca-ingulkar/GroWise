import { createRoutesFromElements, Route } from 'react-router'
import App from './pages/App.tsx'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'
import AllPlantsPage from './components/PlantResults.tsx'
import MyGarden from './pages/MyGarden.tsx'
import PlantPage from './components/.Not being used - PlantPage.tsx'
import PlantGuide from './components/PlantDetail.tsx'
import MyProfile from './components/MyProfile'
import EditProfile from './components/EditProfilePage'
import ManageMyGarden from './pages/ManageMyGarden.tsx'
import RecipeDetail from './components/RecipeDetail.tsx'
import About from './components/About.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="app" element={<App />} />
    <Route path="plant/:id" element={<PlantPage />} />
    <Route path="plant/:id/guide" element={<PlantGuide />} />
    <Route path="plants" element={<AllPlantsPage />} />
    <Route path="my-garden" element={<MyGarden />} />
    <Route path="profile" element={<MyProfile />} />
    <Route path="profile/edit" element={<EditProfile />} />
    <Route path="manage-my-garden" element={<ManageMyGarden />} />
    <Route path="recipes/:id" element={<RecipeDetail />} />
    <Route path="about" element={<About />} />
  </Route>,
)
