import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Recipe_vault from "./Pages/Recipe_vault";
import HomePage from "./Pages/Home/HomePage";
import About_us from "./Pages/Our_story/About_us";
import HealthGuide from "./Pages/HealthGuide";
import Assistant from "./Pages/Assistant";
import Our_team from "./Pages/Our_story/Our_team";
import FindDoctor from "./Pages/FindDoctor";
import RecipeAdmin from "./Pages/admin/recipe/rc_index";
import DoctorAdmin from "./Pages/admin/doctor/do_index";
import ArticleAdmin from "./Pages/admin/article/ac_index";
import RecipeView from "./Components/Recipes/RecipeView";
import RecipeCard from "./Components/Recipes/RecipeCard"
import DoctorCard from "./Components/doctors/doctorCard";
import ArticleView from "./Components/articles/articleView";
import LoginPage from "./Pages/auth/login";
import Register from "./Pages/auth/register";
import Admin from "./Pages/admin";
import CodeOfConduct from './Pages/Our_story/CodeOfConduct'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe_vault" element={<Recipe_vault />} />
        <Route path="/about_us" element={<About_us />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/our_team" element={<Our_team />} />
        <Route path="/HealthGuide" element={<HealthGuide />} />
        <Route path="/findDoctor" element={<FindDoctor />} />
        <Route path="/CodeOfConduct" element = {<CodeOfConduct/>} />
        <Route path="/admin" element={<Admin />}>
          <Route path="recipe" element={<RecipeAdmin />} />
          <Route path="doctor" element={<DoctorAdmin />} />
          <Route path="article" element={<ArticleAdmin />} />
          
        </Route>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/Components/Recipes/RecipeView/:id" element={<RecipeView />} />
        <Route path="/Components/Recipes/RecipeCard" element={<RecipeCard />} />
        <Route path="/Components/doctors/doctorCard" element={<DoctorCard />} />
        <Route path="/Components/articles/articleView/:id" element={<ArticleView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
